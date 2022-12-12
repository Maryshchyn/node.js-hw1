const {nanoid} = require("nanoid")
const fs = require("fs/promises");
const path = require("path")

const contactsPath = path.join(__dirname, "db/contacts.json");

const listContsacts = async () => {
    const result = await fs.readFile(contactsPath, "utf-8");

    return JSON.parse(result) 
}

const get = async (id) => {
    const contactsId = String(id)
    const contacts = await listContsacts();
    const result = contacts.find(item => item.id === contactsId);
    
    return result || null;
}

const add = async ({ name, email, phone }) => {
    const contacts = await listContsacts();
    const newContact = {
        id: nanoid(),
        name,
        email,
        phone,
    }
    contacts.push(newContact)
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    return newContact;
};

const remove = async (id) => {
    const contactsId = String(id)
    const contacts = await listContsacts();
    const index = contacts.findIndex(item => item.id === contactsId);
    if (index === -1) {
        return null;
    }
    const [result] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return result
}


module.exports = {
    listContsacts,
    get,
    add,
    remove,
}
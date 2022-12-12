

const {program} = require("commander")

const contacts = require('./contscts');


const invorceAction = async ({action, id, name, email, phone}) =>{
    switch (action) {
        case 'list':
            const contactsList = await contacts.listContsacts();
            console.table(contactsList)
            break;
        case 'get':
            const oneContact = await contacts.get(id);
            console.table(oneContact);
            break;
        case "add":
            const newContact = await contacts.add({ name, email, phone })
            console.table(newContact)
            break;
        case "remove":
            const deleteContact = await contacts.remove(id)
            console.table(deleteContact);
            break;
        
        default:
            console.log('Unknow action')
    }
}
program
    .option("-a, --action <type>")
    .option("-i, --id <type>")
    .option("-n, --name <type>")
    .option("-e, --email <type>")
    .option("-p, --phone <type>")

program.parse()

const options = program.opts();
invorceAction(options)







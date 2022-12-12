// const yargs = require("yargs");
// const {hideBin} = require("yargs/helpers")

const {program} = require("commander")

const contacts = require('./contscts');


const invorceAction = async ({action, id, name, email, phone}) =>{
    switch (action) {
        case 'list':
            const contactsList = await contacts.listContsacts();
            console.log(contactsList)
            break;
        case 'get':
            const oneContact = await contacts.get(id);
            console.log(oneContact);
            break;
        case "add":
            const newContact = await contacts.add({ name, email, phone })
            console.log(newContact)
            break;
        case "remove":
            const deleteContact = await contacts.remove(id)
            console.log(deleteContact);
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


// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);

// invorceAction(argv)

// program
//     .option("-a, --action <type>")
//     .option("-i, --id <type>")
//     .option("-n, --name <type>")
//     .option("-e, --email <type>")
//     .option("-p, --phone <type>");

// program.parse();

// const options = program.option();
// invorceAction(options)


// invorceAction({ action: 'list' })
// invorceAction({action: 'get', id: '1'})
// invorceAction({action: "add", name: "Женя Марищин", email: "maryshchyn89@gmail.com", phone: "(066) 026 64 24"})
// invorceAction({action: "remove", id: "1dWSQkwwggHmIE7591fHh"})




const contacts = require('./contacts');
const {program} = require('commander');

const invokeAction = async({action, id, name, email, phone }) => {
    switch(action) {
        case('list'):
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
        case('readById'):
            const contactById = await contacts.getContactById(id);
            return console.log(contactById);
        case('add'):
            const addedContact = await contacts.addContact(name, email, phone);
            return console.log(addedContact);
        case('remove'):
            const removedContact = await contacts.removeContact(id);
            return console.log(removedContact);
        default:
      console.warn("\x1B[31m Unknown action type!");
    }
}

program
.option('-a, --action <type>')
.option('-i, --id <type>')
.option('-n, --name <type>')
.option('-e, --email <type>')
.option('-ph, --phone <type>');

program.parse();

const options = program.opts();
invokeAction(options);

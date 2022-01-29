const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");

// index.js
const argv = require("yargs").argv;
// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      listContacts();
      break;

    case "get":
      // ... id
      getContactById(id).then((data) => console.log(data));
      break;

    case "add":
      // ... name email phone
      addContact(name, email, phone).then((data) => console.log(data));
      break;

    case "remove":
      // ... id
      removeContact(id).then((data) => console.log(data));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

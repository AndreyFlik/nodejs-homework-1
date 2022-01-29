const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
  fs.readFile(contactsPath)
    .then((data) => console.log(data.toString()))
    .catch((err) => console.log(err.message));
}

async function getContactById(contactId) {
  // ...твой код
  try {
    const data = await fs.readFile(contactsPath);
    const currentData = JSON.parse(data);
    // console.log(contactId);
    const newData = currentData.filter(
      (contact) => Number.parseInt(contact.id) === contactId
    );

    // console.log(newData);
    return newData;
  } catch (err) {
    return console.log(err.message);
  }
}

async function removeContact(contactId) {
  // ...твой код
  try {
    const data = await fs.readFile(contactsPath);
    const currentData = JSON.parse(data);
    const newData = currentData.filter(
      (contact) => Number.parseInt(contact.id) !== contactId
    );
    await fs.writeFile(contactsPath, JSON.stringify(newData));
    return newData;
  } catch (error) {
    return console.log(error.message);
  }
}

async function addContact(name, email, phone) {
  // ...твой код
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const currentData = JSON.parse(data);
    currentData.push({ name, email, phone });
    await fs.writeFile(contactsPath, JSON.stringify(currentData));
    return currentData;
  } catch (error) {
    return console.log(error.message);
  }
}
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

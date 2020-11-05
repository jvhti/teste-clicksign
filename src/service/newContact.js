function getContactsList() {
  return JSON.parse(localStorage.getItem('contacts') || '[]');
}

function saveContactsList(contactsList) {
  localStorage.setItem('contacts', JSON.stringify(contactsList));
}

function saveContact(name, email, cellphone) {
  const contacts = getContactsList();

  contacts.push({name, email, cellphone});

  saveContactsList(contacts);
}

function deleteContact(id) {
  const contacts = getContactsList();

  contacts.splice(id, 1);

  saveContactsList(contacts);
}

function editContact(id, name, email, cellphone) {
  const contacts = getContactsList();

  contacts.splice(id, 1, {name, email, cellphone});

  saveContactsList(contacts);
}

export {
  saveContact,
  getContactsList,
  deleteContact,
  editContact
};

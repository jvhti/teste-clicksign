function getContactsList() {
  return JSON.parse(localStorage.getItem('contacts') || '[]');
}

function saveContactsList(contactsList) {
  window.setContactList(contactsList);

  localStorage.setItem('contacts', JSON.stringify(contactsList));
}

function saveContact(name, email, cellphone) {
  const contacts = getContactsList();

  contacts.push({name, email, cellphone, id: new Date().getTime()});

  setLastSaved(contacts[contacts.length - 1].id);

  saveContactsList(contacts);
}

function deleteContact(id) {
  let contacts = getContactsList();

  contacts = contacts.filter(contact => contact.id !== id);

  saveContactsList(contacts);
}

function editContact(id, name, email, cellphone) {
  let contacts = getContactsList();

  contacts = contacts.map(contact => contact.id !== id ? contact : {name, email, cellphone, id});

  saveContactsList(contacts);
}

function setCallback(callback) {
  window.setContactList = callback;
}

function setLastSaved(id) {
  window.lastSaved = id;
  window.timestamp = new Date();
}

export {
  saveContact,
  getContactsList,
  deleteContact,
  editContact,
  setCallback
};

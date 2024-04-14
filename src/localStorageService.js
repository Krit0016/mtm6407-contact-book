// localStorageService.js

const CONTACTS_KEY = 'contacts';

const initialContacts = [
  { id: '1', firstName: 'Gregory', lastName: 'House', email: 'greg@house.com' },
  { id: '2', firstName: 'Walter', lastName: 'White', email: 'walter@white.com' },
  { id: '3', firstName: 'Sam', lastName: 'Winchester', email: 'sam@winchester.com' },
  { id: '4', firstName: 'Dean', lastName: 'Winchester', email: 'dean@winchester.com' },
  { id: '5', firstName: 'Claire', lastName: 'Fraser', email: 'claire@fraser.com' },
  { id: '6', firstName: 'Jesse', lastName: 'Pinkman', email: 'jesse@pinkman.com' },
  { id: '7', firstName: 'Lucifer', lastName: 'Morningstar', email: 'lucifer@morningstar.com' },
  { id: '8', firstName: 'Niklaus', lastName: 'Mikaelson', email: 'niklaus@mikaelson.com' },
];

export function getContacts() {
  const contactsJson = localStorage.getItem(CONTACTS_KEY);
  let contacts = contactsJson ? JSON.parse(contactsJson) : initialContacts;
  
  // Sort contacts alphabetically by last name
  contacts.sort((a, b) => {
    const lastNameA = a.lastName.toLowerCase();
    const lastNameB = b.lastName.toLowerCase();
    if (lastNameA < lastNameB) return -1;
    if (lastNameA > lastNameB) return 1;
    return 0;
  });

  return contacts;
}

export function saveContacts(contacts) {
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
}

export function getContactById(id) {
  const contacts = getContacts();
  return contacts.find(contact => contact.id === id);
}

export function addContact(contact) {
  const contacts = getContacts();
  contact.id = Date.now().toString();
  contacts.push(contact);
  saveContacts(contacts);
}

export function updateContact(updatedContact) {
  const contacts = getContacts();
  const index = contacts.findIndex(contact => contact.id === updatedContact.id);
  if (index !== -1) {
    contacts[index] = updatedContact;
    saveContacts(contacts);
  }
}

export function deleteContact(contactId) {
    console.log('Delete contact in localStorageService called:', contactId); // Add this line
    const contacts = getContacts()
    const filteredContacts = contacts.filter(contact => contact.id !== contactId)
    saveContacts(filteredContacts)
  }


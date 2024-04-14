<!-- AddContact.vue -->
<template>
    <div>
      <h2>Add Contact</h2>
      <form @submit.prevent="addNewContact">
        <div>
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="newContact.firstName" required />
        </div>
        <div>
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="newContact.lastName" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="newContact.email" required />
        </div>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { addContact } from './localStorageService'; // Assuming you have a function to add contacts to local storage
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const router = useRouter();
  
      // Data for the new contact form
      const newContact = ref({
        firstName: '',
        lastName: '',
        email: ''
      });
  
      // Function to add a new contact
      const addNewContact = () => {
        // Validate the new contact data
        if (!newContact.value.firstName || !newContact.value.lastName || !newContact.value.email) {
          alert('Please fill in all fields');
          return;
        }
  
        // Add the new contact to local storage
        addContact(newContact.value);
  
        // Redirect to the contact details view for the newly added contact
        router.push(`/contact/${newContact.value.id}`); // Assuming the contact has an ID
      };
  
      return {
        newContact,
        addNewContact
      };
    }
  };
  </script>
  
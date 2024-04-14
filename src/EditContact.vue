<template>
    <div>
      <h2>Edit Contact</h2>
      <form @submit.prevent="editContact" v-if="editedContact">
        <input type="text" v-model="editedContact.firstName" placeholder="First Name" required />
        <input type="text" v-model="editedContact.lastName" placeholder="Last Name" required />
        <input type="email" v-model="editedContact.email" placeholder="Email" required />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import { getContactById, updateContact } from './localStorageService'
  import { useRouter } from 'vue-router'
  
  export default {
    setup() {
      const router = useRouter();
      const route = router.currentRoute.value; // Access current route
      const contactId = route.params.id; // Access id from current route
      const editedContact = ref(getContactById(contactId) || {
        firstName: '',
        lastName: '',
        email: ''
      });
  
      // Load contact details when the component is mounted
      onMounted(() => {
        editedContact.value = getContactById(contactId); // Update editedContact on mount
      });
  
      const editContact = () => {
        if (!editedContact.value || !editedContact.value.firstName || !editedContact.value.lastName || !editedContact.value.email) {
          alert('Please fill in all fields');
          return;
        }
  
        updateContact(editedContact.value);
        router.push('/');
      }
  
      return {
        editedContact,
        editContact
      }
    }
  }
  </script>
  
<!-- ContactList.vue -->
<template>
    <div>
      <h1>Contact List</h1>
      <div v-if="contacts.length === 0">
        <p>No contacts available.</p>
      </div>
      <ul v-else>
        <li v-for="contact in contacts" :key="contact.id">
          <router-link :to="'/contact/' + contact.id">{{ contact.firstName }} {{ contact.lastName }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { getContacts } from './localStorageService'
  
  export default {
    setup() {
      const contacts = ref(getContacts())
  
      return {
        contacts
      }
    }
  }
  </script>
  
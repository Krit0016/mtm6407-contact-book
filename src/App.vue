<template>
  <div>
    <h1>Contact Book</h1>
    <router-link to="/add">Add Contact</router-link>
    <input type="text" v-model="search" placeholder="Search contacts..." />
    <ul class="contact-list">
      <!-- Loop through the filtered contacts and create a router link for each one -->
      <li class="contact-item" v-for="contact in filteredContacts" :key="contact.id">
        <!-- Include the contact ID as a route parameter in the router link -->
        <router-link :to="'/contact/' + contact.id" class="contact-link">{{ contact.firstName }} {{ contact.lastName }}</router-link>
      </li>
    </ul>
    <!-- Ensure that the router view is only displayed once -->
    <router-view v-if="!$route.meta.hideContactList"></router-view>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { getContacts } from './localStorageService'

export default {
  setup() {
    const search = ref('')
    const contacts = ref(getContacts())

    const filteredContacts = computed(() => {
      return contacts.value.filter(contact =>
        contact.firstName.toLowerCase().includes(search.value.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(search.value.toLowerCase())
      )
    })

    return {
      search,
      filteredContacts
    }
  }
}
</script>
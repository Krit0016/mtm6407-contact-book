<template>
  <div>
    <h1>Contact Details</h1>
    <div v-if="contact">
      <p>First Name: {{ contact.firstName }}</p>
      <p>Last Name: {{ contact.lastName }}</p>
      <p>Email: {{ contact.email }}</p>
      <!-- Edit button to navigate to the EditContact component -->
      <router-link :to="'/edit/' + contact.id" class="edit-button">Edit</router-link>
      <!-- Delete button to delete the contact -->
      <button @click="deleteContact" class="delete-button">Delete</button>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { getContactById, deleteContact } from './localStorageService' // Assuming there is a deleteContact function in the localStorageService
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const contact = ref(null)

    // Fetch contact details based on the route parameter 'id'
    const fetchContact = () => {
      contact.value = getContactById(route.params.id)
    }

    // Call fetchContact when the component is mounted and whenever route.params.id changes
    watch(() => route.params.id, fetchContact, { immediate: true })

    // Function to delete the contact
    const deleteContact = () => {
      if (!contact.value) return // Return if contact is not loaded
      const confirmDelete = confirm('Are you sure you want to delete this contact?')
      if (confirmDelete) {
        // Delete contact from local storage
        deleteContact(contact.value.id)
        // Navigate back to the start view
        router.push('/')
      }
    }

    return {
      contact,
      deleteContact
    }
  }
}
</script>
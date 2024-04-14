import { createRouter, createWebHistory } from 'vue-router'
import ContactList from '../components/ContactList.vue'
import EditContact from '../components/EditContact.vue'

const routes = [
  // Route to display the contact list
  {
    path: '/',
    name: 'ContactList',
    component: ContactList
  },
  // Route for editing a contact
  {
    path: '/edit/:id',
    name: 'EditContact',
    component: EditContact,
    meta: { hideContactList: true }
  },
  // Other routes...
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

// main.js
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AddContact from './AddContact.vue'
import EditContact from './EditContact.vue'
import ContactDetails from './ContactDetails.vue'

const routes = [
  { path: '/', component: App },
  { path: '/contact/:id', component: ContactDetails }, // Make sure the route accepts the id parameter
  { path: '/add', component: AddContact },
  { path: '/edit/:id', component: EditContact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')

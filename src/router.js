import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ProjectView from './views/ProjectView.vue'
import ContactsView from './views/ContactsView.vue'
import SingleProjectView from './views/SingleProjectView.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/project',
            name: 'project',
            component: ProjectView
        },
        {
            path: '/project/:slug',
            name: 'single-project',
            component: SingleProjectView
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView
        },
    ]
})

export { router }
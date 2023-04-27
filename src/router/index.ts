import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UsersView from '../views/UsersView.vue';
import NewUserView from '../views/NewUserView.vue';
import MyAccountView from '../views/MyAccountView.vue';
import ChangePasswordView from '../views/ChangePasswordView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import NewProjectView from '../views/NewProjectView.vue';
import ReportsView from '../views/ReportsView.vue';
import CurrentReportView from '../views/CurrentReportView.vue';
import APIView from '../views/APIView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/users/browse',
      name: 'browseusers',
      component: UsersView
    },
    {
      path: '/users/new',
      name: 'newuser',
      component: NewUserView
    },
    {
      path: '/users/me',
      name: 'me',
      component: MyAccountView
    },
    {
      path: '/users/me/password',
      name: 'changepassword',
      component: ChangePasswordView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/projects/browse',
      name: 'browseprojects',
      component: ProjectsView
    },
    {
      path: '/projects/:Pk',
      name: 'browseprojects',
      component: ProjectsView
    },
    {
      path: '/projects/new',
      name: 'newproject',
      component: NewProjectView
    },
    {
      path: '/reports',
      name: 'reports',
      component: ReportsView
    },
    {
      path: '/reports/browse',
      name: 'browsereports',
      component: ReportsView
    },
    {
      path: '/reports/current',
      name: 'reports',
      component: CurrentReportView
    },
    {
      path: '/api',
      name: 'api',
      component: APIView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router

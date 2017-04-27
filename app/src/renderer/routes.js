export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView')
  },
  {
    path: '/buckets',
    name: 'buckets',
    component: require('components/BucketsView')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: require('components/DashboardView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
export default [
  {
    path: '/',
    location: './pages/HomePage',
    exact: true,
    name: 'Home'
  },
  {
    path: '/redux',
    exact: false,
    location: './pages/ReduxPage',
    name: 'Redux'
  },
  {
    path: '/posts',
    exact: false,
    location: './features/posts/Posts',
    name: 'Posts'
  }
]

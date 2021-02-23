export default [
  {
    path: '/',
    location: './pages/HomePage',
    exact: true,
    name: 'Home'
  },
  {
    path: '/posts',
    exact: false,
    location: './features/posts/Posts',
    name: 'Async Posts'
  },
  {
    path: '/articles',
    exact: true,
    location: './features/articles/Articles',
    name: 'Articles'
  }
]

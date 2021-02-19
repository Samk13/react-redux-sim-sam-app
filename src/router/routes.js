export default [
  {
    path: '/',
    location: './pages/HomePage',
    exact: true,
    name: 'Home'
  },
  {
    path: '/article',
    location: './features/articles/Article',
    exact: false,
    name: 'Article'
  },
  {
    path: '/redux',
    exact: false,
    location: './pages/ReduxPage',
    name: 'Redux'
  }
]

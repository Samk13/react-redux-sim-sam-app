export default [
  {
    path: '/',
    exact: true,
    location: './features/articles/Articles',
    name: 'Articles'
  },
  {
    path: '/posts',
    exact: false,
    location: './features/posts/Posts',
    name: 'Async Posts'
  }
]

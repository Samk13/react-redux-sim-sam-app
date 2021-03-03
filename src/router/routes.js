export default [
  {
    path: '/',
    exact: true,
    location: './features/articles/Articles',
    name: 'Articles'
  },
  {
    path: '/test',
    exact: true,
    location: './features/articles/ArticleTest',
    name: 'Article test css'
  },
  {
    path: '/posts',
    exact: false,
    location: './features/posts/Posts',
    name: 'Async Posts'
  }
]

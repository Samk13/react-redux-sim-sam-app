const Articles = './features/articlesfeat/Articles'
const Posts = './features/posts/Posts'

export default [
  {
    path: '/',
    exact: true,
    location: Articles,
    name: 'Articles'
  },
  {
    path: '/posts',
    exact: false,
    location: Posts,
    name: 'Async Posts'
  }
]

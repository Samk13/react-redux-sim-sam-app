import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import articlesReducer from '../features/articles/articlesSlice'
import menuSlice from '../features/menu/menuSlice'
import postsReducer from '../features/posts/postsSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    articles: articlesReducer,
    menu: menuSlice,
    posts: postsReducer
  },
  middleware: [...getDefaultMiddleware()],

  devTools: process.env.NODE_ENV !== 'production'
})

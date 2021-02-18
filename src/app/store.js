import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import articleReducer from '../features/article/articleSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    articles: articleReducer
  },
  middleware: [...getDefaultMiddleware()],

  devTools: process.env.NODE_ENV !== 'production'
})

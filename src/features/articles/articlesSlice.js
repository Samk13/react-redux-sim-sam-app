import { createSlice } from '@reduxjs/toolkit'
import { v1 as uuid } from 'uuid'
import { articleInitialState } from '../../app/data'

export const articleSlice = createSlice({
  name: 'articles',
  initialState: articleInitialState,
  reducers: {
    create: {
      reducer: (state, { payload }) => {
        state.push(payload)
      },
      prepare: ({ body, author }) => ({
        payload: {
          id: `article_${uuid()}`,
          createdAt: new Date().toISOString(),
          imgUrl: 'https://picsum.photos/200/300',
          lastEdited: '',
          body,
          author,
          seen: false
        }
      })
    },
    edit: (state, action) => {
      const articleEdit = state.find((article) => article.id === action.payload.id)
      if (articleEdit) {
        articleEdit.body = action.payload.body
        articleEdit.author = action.payload.author
        articleEdit.lastEdited = new Date().toDateString()
      }
    },
    remove: (state, { payload }) => {
      return state.filter(({ id }) => id !== payload)
    },
    toggleSeen: (state, action) => {
      const getSelectedArticle = state.find((article) => article.id === action.payload)
      if (getSelectedArticle) {
        getSelectedArticle.seen = !getSelectedArticle.seen
      }
    }
  }
})

export const { create, edit, remove, toggleSeen } = articleSlice.actions
export const getArticles = ({ articles }) => articles
export default articleSlice.reducer

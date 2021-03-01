import { createSlice } from '@reduxjs/toolkit'
import { v1 as uuid } from 'uuid'
import { localStorageSetState } from '../../Service/LocalStorage'

const LSArray = 'stateSession'
export const articleSlice = createSlice({
  name: 'articles',
  initialState: JSON.parse(localStorage.getItem(LSArray)) || [],
  reducers: {
    create: {
      reducer: (state, { payload }) => {
        localStorageSetState(payload, LSArray)
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
      localStorage.setItem(LSArray, JSON.stringify(state))
    },
    remove: (state, { payload }) => {
      let _state = JSON.parse(localStorage.getItem(LSArray)) || []
      for (let i = 0; i < _state.length; i++) {
        let article = _state[i]
        if (article.id == payload) {
          _state.splice(i, 1)
        }
      }
      localStorage.setItem(LSArray, JSON.stringify(_state))
      return _state
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

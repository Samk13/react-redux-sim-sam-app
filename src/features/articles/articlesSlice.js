import { createSlice } from '@reduxjs/toolkit'
import { v1 as uuid } from 'uuid'
import {
  localStorageInitialState,
  localStorageSetState,
  setLocalStorage,
  getLocalStorageItem
} from '../../Service/LocalStorage'
import { articleInitialState } from '../../app/data'

const LSArray = 'stateSession'

export const articleSlice = createSlice({
  name: 'articles',
  initialState: localStorageInitialState(LSArray, articleInitialState),
  reducers: {
    create: {
      reducer: (state, { payload }) => {
        localStorageSetState(LSArray, payload)
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
      articleEdit.body = action.payload.body
      articleEdit.author = action.payload.author
      articleEdit.lastEdited = action.payload.lastEdited
      setLocalStorage(LSArray, state)
    },
    remove: (_, { payload }) => {
      let _state = getLocalStorageItem(LSArray)
      for (let i = 0; i < _state.length; i++) {
        let article = _state[i]
        if (article.id === payload) {
          _state.splice(i, 1)
        }
      }
      setLocalStorage(LSArray, _state)
      return _state
    },
    toggleSeen: (_, { payload }) => {
      let _state = getLocalStorageItem(LSArray)
      const getSelectedArticle = _state.find((article) => article.id === payload)
      if (getSelectedArticle) {
        getSelectedArticle.seen = !getSelectedArticle.seen
        setLocalStorage(LSArray, _state)
        return _state
      }
    }
  }
})

export const { create, edit, remove, toggleSeen } = articleSlice.actions
export const getArticles = ({ articles }) => articles

export default articleSlice.reducer

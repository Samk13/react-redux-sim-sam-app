import { createSlice } from '@reduxjs/toolkit'
import { v1 as uuid } from 'uuid'
import { setInitialState, SetState, setItem, getItem } from '../../Service/LocalStorage'
import { articleInitialState } from '../../app/data'

const LSArray = 'stateSession'

export const articleSlice = createSlice({
  name: 'articles',
  initialState: setInitialState(LSArray, articleInitialState),
  reducers: {
    create: {
      reducer: (state, { payload }) => {
        SetState(LSArray, payload)
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
      setItem(LSArray, state)
    },
    remove: (_, { payload }) => {
      let _state = getItem(LSArray)
      for (let i = 0; i < _state.length; i++) {
        let article = _state[i]
        if (article.id === payload) {
          _state.splice(i, 1)
        }
      }
      setItem(LSArray, _state)
      return _state
    },
    toggleSeen: (_, { payload }) => {
      let _state = getItem(LSArray)
      const getSelectedArticle = _state.find((article) => article.id === payload)
      if (getSelectedArticle) {
        getSelectedArticle.seen = !getSelectedArticle.seen
        setItem(LSArray, _state)
        return _state
      }
    }
  }
})

export const { create, edit, remove, toggleSeen } = articleSlice.actions
export const getArticles = ({ articles }) => articles

export default articleSlice.reducer

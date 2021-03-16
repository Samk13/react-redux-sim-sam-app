import { createSlice } from '@reduxjs/toolkit'
import { v1 as uuid } from 'uuid'
import { setInitialState, SetState, setItem, getItem } from '../../Service/LocalStorage'
import { articleInitialState } from '../../app/data'

const LOCALSTATE = 'stateSession'

export const articleSlice = createSlice({
  name: 'articles',
  initialState: setInitialState(LOCALSTATE, articleInitialState),
  reducers: {
    create: {
      reducer: (state, { payload }) => {
        SetState(LOCALSTATE, payload)
        state.push(payload)
      },
      prepare: ({ body, author, type }) => ({
        payload: {
          id: `article_${uuid()}`,
          createdAt: new Date().toISOString(),
          imgUrl: 'https://picsum.photos/200/300',
          lastEdited: '',
          body,
          author,
          type,
          seen: false
        }
      })
    },
    edit: (state, action) => {
      const articleEdit = state.find((article) => article.id === action.payload.id)
      articleEdit.body = action.payload.body
      articleEdit.author = action.payload.author
      articleEdit.lastEdited = action.payload.lastEdited
      setItem(LOCALSTATE, state)
    },
    remove: (_, { payload }) => {
      let _state = getItem(LOCALSTATE)
      for (let i = 0; i < _state.length; i++) {
        let article = _state[i]
        if (article.id === payload) {
          _state.splice(i, 1)
        }
      }
      setItem(LOCALSTATE, _state)
      return _state
    },
    toggleSeen: (_, { payload }) => {
      let _state = getItem(LOCALSTATE)
      const getSelectedArticle = _state.find((article) => article.id === payload)
      if (getSelectedArticle) {
        getSelectedArticle.seen = !getSelectedArticle.seen
        setItem(LOCALSTATE, _state)
        return _state
      }
    }
  }
})

export const { create, edit, remove, toggleSeen } = articleSlice.actions
export const getArticles = ({ articles }) => {
  return [...Array.from(articles).reverse()]
}
export default articleSlice.reducer

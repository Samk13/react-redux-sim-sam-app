import { createSlice } from '@reduxjs/toolkit'
import { v1 as uuid } from 'uuid'

const articleInitialState = [
  {
    id: uuid(),
    createdAt: new Date().toISOString(),
    lastEdited: '',
    author: 'Sam',
    imageurl: 'https://picsum.photos/300/300',
    body:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    seen: false
  }
  // {
  //   id: uuid(),
  //   createdAt: new Date().toISOString(),
  //   lastEdited: '',
  //   author: 'Sam',
  //   body:
  //     'I motsättning till vad många tror, är inte Lorem Ipsum slumpvisa ord. Det har sina rötter i ett stycke klassiskt litteratur på latin från 45 år före år 0, och är alltså över 2000 år gammalt. Richard McClintock, en professor i latin på Hampden-Sydney College i Virginia, översatte ett av de mer ovanliga orden, consectetur, från ett stycke Lorem Ipsum och fann dess ursprung genom att studera användningen av dessa ord i klassisk litteratur. Lorem Ipsum kommer från styckena 1.10.32 och 1.10.33 av "de Finibus Bonorum et Malorum" (Ytterligheterna av ont och gott) av Cicero, skriven 45 före år 0. Boken är en avhandling i teorier om etik, och var väldigt populär under renäsanssen. Den inledande meningen i Lorem Ipsum, "Lorem Ipsum dolor sit amet...", kommer från stycke 1.10.32.',
  //   seen: true
  // }
]

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
          id: uuid(),
          createdAt: new Date().toISOString(),
          imageurl: 'https://picsum.photos/200/300',
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
        articleEdit.lastEdited = new Date().toDateString()
      }
    },
    remove: (state, { payload }) => {
      const index = state.findIndex((article) => article.id === payload.id)
      if (index !== -1) {
        state.splice(index, 1)
      }
    }
  }
})

export const { create, edit, remove } = articleSlice.actions
export const showArticles = ({ articles }) => articles
export default articleSlice.reducer

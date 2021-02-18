import { createSlice } from '@reduxjs/toolkit';
import { v1 as uuid } from 'uuid';

const articleIntialState = [
  {
    id: uuid(),
    body: 'Learn React',
    author: 'Sam'
  },
  {
    id: uuid(),
    body: 'Learn React',
    author: 'Sam'
  },
  {
    id: uuid(),
    body: 'Learn React',
    author: 'Sam'
  }
];

export const articleSlice = createSlice({
  name: 'articles',
  initialState: articleIntialState,
  reducers: {
    create: (state, payload) => {
      return state.push(payload);
    },
    prepare: ({ body, author }) => ({
      payload: {
        id: uuid(),
        body,
        author
      }
    }),
    edit: (state, action) => {
      const articleEdit = state.find((article) => article.id === action.payload.id);
      if (articleEdit) {
        articleEdit.body = action.payload.body;
      }
    },
    remove: (state, { payload }) => {
      const index = state.findIndex((article) => article.id === payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    }
  }
});

export const { create, edit, remove } = articleSlice.actions;

export default articleSlice.reducer;

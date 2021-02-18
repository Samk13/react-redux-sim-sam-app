import { createSlice } from '@reduxjs/toolkit';
import { v1 as uuid } from 'uuid';


const articleIntialState= [
    {
      id: uuid(),
      body: 'Learn React',
      author:'Sam',
    },
    {
      id: uuid(),
      body: 'Learn React',
      author:'Sam',
    },
    {
      id: uuid(),
      body: 'Learn React',
      author:'Sam',
    },

  ];

export const articleSlice = createSlice({
    name: 'articles',
    initialState: articleIntialState,
    reducers: {
        setArticle: (state, action) => {
            return { ...state, articles:[{...action.payload}]}
        },
        newArticle: (state, action) => {
            return {...state, articles: [action.payload, ...state.articles]}
        },
        editArticle: (state, action)=> {
            const articles = state.articles.map(article =>{
                if (article.id === action.payload.id) {
                    article = action.payload;
                }
                return article;
            })
            return{ ...state, articles: [...articles]}
            },
            deleteArticle: (state, action) => {
                const articles = state.articles.filter(article =>
                    article.id !== action.payload.id )
                return {...state, articles:[...articles]}
            }
     }
})

export const { setArticle, newArticle, editArticle, deleteArticle } = articleSlice.actions

export default articleSlice.reducer
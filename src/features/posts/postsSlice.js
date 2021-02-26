import { createSlice } from '@reduxjs/toolkit'
import { getPosts } from '../../Service/Api'

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    status: null
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = 'loading'
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getPosts.rejected]: (state) => {
      state.status = 'failed'
    }
  }
})

export const showPosts = ({ posts }) => posts.list
export default postsSlice.reducer

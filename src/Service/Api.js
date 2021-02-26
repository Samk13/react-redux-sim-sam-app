import { createAsyncThunk } from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk('posts/getPosts', async ({ limit }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
  return await response.json()
})

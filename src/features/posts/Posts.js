import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showPosts } from './postsSlice'
import { getPosts } from '../../Service/Api'

export default function Posts() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts({ limit: 10 }))
  }, [dispatch])
  const allPosts = useSelector(showPosts)

  return (
    <div>
      <h1>Posts</h1>
      {allPosts?.map((post) => {
        return (
          <div key={post.id}>
            <details>
              <summary>{post.title}</summary>
              {post.body}
            </details>
          </div>
        )
      })}
    </div>
  )
}

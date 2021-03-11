import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showPosts } from './postsSlice'
import { getPosts } from '../../Service/Api'
import styles from './posts.module.css'

export default function Posts() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts(10))
  }, [dispatch])
  const allPosts = useSelector(showPosts)

  return (
    <div>
      <h1 className={styles.title}>Posts</h1>
      {allPosts?.map((post) => {
        return (
          <div key={post.id} className={StyleSheet.postsContainer}>
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

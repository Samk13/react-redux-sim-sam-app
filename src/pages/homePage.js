// import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react';
import styles from './HomePage.module.css';
// import {
//     articleSlice,
//     newArticle,
//     editArticle,
//     deleteArticle,
//     setArticle
// } from '../features/article/articleSlice'

export default function HomePage() {
  // const dispatch = useDispatch();
  // const articles = useSelector((state) => state.articles)
  const [author, setAuthor] = useState('');
  const [data, setData] = useState('');

  const handleCreateNewArticle = () => {
    console.log('handleCreateNewArticle');
  };
  // const handleNewInputChange = () => { console.log('handleNewInputChange');}
  // const newArticleInput = () => { console.log('newArticleInput');}

  return (
    <section>
      <div>
        author: {author}
        <br />
        body: {data}
      </div>
      <form onSubmit={handleCreateNewArticle}>
        <label htmlFor="author">Author</label>
        <input
          className={styles.textbox}
          aria-label="Set article author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label htmlFor="article">article body</label>
        <textarea
          className={styles.textarea}
          id="article"
          name="articleBoby"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </section>
  );
}

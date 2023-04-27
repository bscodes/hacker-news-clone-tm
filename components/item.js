import React from 'react'
import styles from '../styles/item.module.scss';
import Story from './story';
import CommentForm from './comment-form';
import Comment from './comment';

const Item = ({
  story,
  comments = null
}) => {
  return (
    <div className={styles.item}>
      <Story
        {...story}
      />

      <div className={styles.form}>
        <CommentForm/>
      </div>

      <div className={styles.comments}>
        {comments ? (
          comments.map(comment => (
          <Comment 
            key={comment.id}
            {...comment}
          />))
        ) : (
          <div className={styles.loading}>
            Loading...
          </div>
        )}
      </div>

    </div>
  )
}

export default Item
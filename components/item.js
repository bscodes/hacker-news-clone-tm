import React from 'react'
import styles from '../styles/item.module.scss';
import Story from './story';

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
        {/* 
        TODO: <CommentForm/>
         */}
      </div>

      <div className={styles.comments}>
        {comments ? (
          comments.map(comment => (<>/* <Comment /> */</>))
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
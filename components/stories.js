import Link from 'next/link'
import React from 'react'
import UpdatedStory from './updated-story'
import styles from '../styles/stories.module.scss'


const Stories = ({
  page = 1,
  stories,
  offset = null,
  morePath = 'news',
  showMoreButton
}) => {
  return (
    <div>
      {stories && stories.map((story, i) => {
        return (
          <div key={story.id} className={styles.item}>
            {offset !== null ? (
              <>
                <span className={styles.count}>
                  {offset + i + 1}
                </span>
              </>
            ) : null}
            <UpdatedStory
              id={story.id}
              title={story.title}
              date={story.date}
              url={story.url}
              user={story.user}
              score={story.score}
              commentsCount={story.comments.length}
            />
          </div>
        )
      })}
      <footer className={styles.footer}>
        {showMoreButton && (
          <Link href={`/${morePath}/${page + 1}`} legacyBehavior>
            <a>More</a>
          </Link>
        )}
      </footer>
    </div>
  )
}

export default Stories
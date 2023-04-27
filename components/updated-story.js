import React, { useEffect, useState } from 'react'
import Story from './story';
import { observe } from '../lib/get-item';

const UpdatedStory = (props) => {
  const [story, setStory] = useState(props);

  useEffect(() => {
    observe(props.id, (data) => setStory(data))
  }, [props.id])

  return (
    <Story
      id={story.id}
      title={story.title}
      date={story.date}
      url={story.url}
      user={story.user}
      score={story.score}
      commentsCount={story.comments?.length || 0}
    />
  )
}

export default UpdatedStory
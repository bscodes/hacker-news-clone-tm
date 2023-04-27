import React, { useEffect, useState } from 'react'
import getItem from '../../lib/get-item'
import getComments from '../../lib/get-comments'
import Page from '../../components/page';
import Item from '../../components/item';

export function getStaticPaths() {
  return {
    paths: [{
      params: {
        id: '29001721'
      }
    }],
    fallback: 'blocking'
  }
}

export async function getStaticProps({
  params: {
    id = 1
  }
  
}) {
  const story = await getItem(id);

  return {
    props: {
      story
    }
  }
}

const News = ({story}) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    if(story) {
      getComments(story.comments)
        .then(comments => {
          setComments(comments)
        })
        .catch(err => {
          console.log({err});
        })
    }
  }, [story])

  return (
    <Page>
      <Item
        story={story}
        comments={comments}
      />
    </Page>
  )
}

export default News
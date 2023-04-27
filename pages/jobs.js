import React from 'react'
import getStories from '../lib/get-stories'
import Stories from '../components/stories';
import Page from '../components/page';

export async function getStaticProps() {
  const stories = await getStories('jobstories', { page: 1});

  return {
    props: {
      stories
    },
    revalidate: 1
  }
}

const Jobs = ({ stories }) => {
  return (
    <Page>
      <Stories stories={stories} morePath='jobs' showMoreButton={false}/>
    </Page>
  )
}

export default Jobs
import React from 'react'
import Page from '../../components/page'
import getStories from '../../lib/get-stories';
import Stories from '../../components/stories';

export function getStaticPaths() {
  return {
    paths: [{
      params: {
        page: "1"
      }
    }],
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params: { page = 1 } }) {
  try {
    page = Number(page);
    const stories = await getStories('newstories', { page });

    return {
      props: {
        stories,
        page
      },
      revalidate: 1
    }
  } catch (err) {
    console.log({
      Error: err
    });
  }

}

const Newest = ({
  page,
  stories
}) => {
  return (
    <>
      <Page>
        <Stories
          stories={stories}
          page={page}
          showMoreButton
          morePath="newest"
        />
      </Page>
    </>
  )
}

export default Newest
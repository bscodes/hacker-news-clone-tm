import db from './db'

export default function fetch(commentIds) {
  return Promise.all(
    commentIds.map(async (id) => {
      const data = await db.child('item').child(id).once('value');
      const val = data.val();

      return {
        id: val.id,
        user: val.by,
        text: val.text,
        date: new Date(val.time * 1000).toISOString(),
        comments: await fetch(val.kids || []),
        commentsCount: val.descendants || 0,
      }
    })
  )
}
export const transform = (val) => {
  return {
    id: val.id,
    url: val.url || null,
    user: val.by,
    date: new Date(val.time * 1000)?.toISOString(),
    comments: val.kids || [],
    title: val.title,
  }
}
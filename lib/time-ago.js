import ms from 'ms';

const timeAgo = (date) => {
  const timeDiff = new Date() - date;
  return ms(timeDiff, {
    long: true,
    ago: true
  })
}

export default timeAgo;
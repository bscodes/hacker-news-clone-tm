import React from 'react'
import styles from '../styles/comments.module.scss';
import timeAgo from '../lib/time-ago';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggled: false }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      toggled: !this.state.toggled
    })
  }

  render() {
    const {
      user,
      text,
      date,
      comments,
    } = this.props;

    return (
      <div className={styles.comment}>
        <div className={styles.meta}>
          {user} {timeAgo(new Date(date))} ago {` `}
          <span onClick={this.toggle} className={styles.toggle}>
            {
              this.state.toggled
              ? `[+${(this.props.commentsCount || 0) + 1}]`
              : `[-]`
            }
          </span>
        </div>

        {this.state.toggled
        ? null
        : [
          <div key="text" className={styles.text}
            dangerouslySetInnerHTML={{
              __html: text
            }}
          />,
          <div key='children' className={styles.children}>
            {comments.map(comment => (
              <Comment key={comment.id} {...comment}/>
            ))}
          </div>
        ]}
      </div>
    )
  }
}
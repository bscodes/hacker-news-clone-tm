import React from 'react'
import styles from '../styles/page.module.scss';
import Header from './header';

const Page = ({
  children
}) => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.page}>
        {children}
      </div>

      <style jsx global>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
          background: #eee;
        }

        * {
          margin:0;
          padding:0;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Page
import React from 'react'
import styles from '../styles/header.module.scss'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/" legacyBehavior>
          <a>
            <div className={styles.logo}>
              HN
            </div>
            <div className={styles.title}>
              Hacker Next
            </div>
          </a>
        </Link>

        <div className={styles.nav}>
          <ul>
            <li>
              <Link href="/newest/1" legacyBehavior>
                <a>
                  new
                </a>
              </Link>
            </li>
            <li>
              <Link href="/show" legacyBehavior>
                <a>
                  show
                </a>
              </Link>
            </li>
            <li>
              <Link href="/jobs" legacyBehavior>
                <a>
                  jobs
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.right}>
        <Link href="/login" legacyBehavior>
          <a className={styles.login}>
            login
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header
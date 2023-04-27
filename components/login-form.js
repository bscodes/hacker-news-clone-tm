import React from 'react'
import styles from '../styles/login-form.module.scss'

const LoginForm = () => {
  return (
    <div>
      <h4>Login</h4>
      <p className={styles.paragraph}>
        user name: <input type='text'/>
        <br />
        password: <input type='password'/>
      </p>
      <button>login</button>

      <p className={styles.paragraph}>
        <span>
          <a href="#">
            forgot password?
          </a>
        </span>
      </p>
      <h4>
        create account
      </h4>
      <p className={styles.paragraph}>
        user name: <input type='text'/>
        <br />
        email: <input type='email'/>
        <br />
        password: <input type='password'/>
      </p>
      <button>
        create account
      </button>
    </div>
  )
}

export default LoginForm
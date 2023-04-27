import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link'
import styles from '../styles/QuestionBank.module.css'
export default function Outline({ }) {
  const { user, error, isLoading } = useUser();
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error.message}</h1>
  }
  if (user) {
    return (
      <div className={styles.container}>
        <h1>Welcome {user.nickname}!</h1>
        <Link className={styles.loginContainer} href="/subpages/addoutline">Create Outline</Link>
        <Link className={styles.loginContainer} href="/subpages/viewoutline">View Outlines</Link>
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <h1>Welcome User !! Please Login/Signup to continue.</h1>
        <a href='http://localhost:3000/api/auth/login' className={styles.loginContainer}>Login</a>
        <a href='http://localhost:3000/api/auth/login' className={styles.signupContainer}>Signup</a>
      </div>
    )
  }
}

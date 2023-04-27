
import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0';
import StudentData from './subpages/studentManager';
import styles from '../styles/Home.module.css'
export default function Home({ }) {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error.message}</h1>
  }
  if (user) {
    user ? console.log(user.nickname) : console.log('no user');
    return (
      <div className={styles.container} >
        <StudentData />

      </div>
    )
  }
  else {
    return (
      <div className={styles.home} >
        <h1>Welcome To SPMS3 !!</h1>
        <div className={styles.prompt}> Already have an account ? <a href='http://localhost:3000/api/auth/login' className={styles.loginContainer}>Login</a></div>
        or
        <div className={styles.prompt}>Signup to continue <a href='http://localhost:3000/api/auth/login' className={styles.signupContainer}>Signup</a></div>
      </div>
    )
  }
}

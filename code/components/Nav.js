import Link from 'next/link'
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import navStyles from '../styles/Nav.module.css'

const Nav = ({ children }) => {
    const { user, error, isLoading } = useUser();
    const router = useRouter();
    // console.log(router.pathname);
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <span className={router.pathname == "/" ? null : null}>
                        <span className={navStyles.titleLogo}>SPMS</span>
                    </span>

                </li>
                {user ? (user.nickname == 'faculty' ? <li> <Link className={router.pathname == "/subpages/viewoutline" ? navStyles.active : null} href="/subpages/viewoutline">Course Outline</Link></li> : null) : null}
                {user ? (user.nickname == 'faculty' ? <li> <Link className={router.pathname == "/subpages/viewquestion" ? navStyles.active : null} href="/subpages/viewquestion">Question Bank</Link></li> : null) : null}
                {user ? <li> <Link className={router.pathname == "/subpages/studentManager" ? navStyles.active : null} href="/subpages/studentManager">Student Manager</Link></li> : null}
                {user ? <li> <Link className={router.pathname == "/co" ? navStyles.active : null} href="/co">CO</Link></li> : null}
                {user ? <li> <Link className={router.pathname == "/po" ? navStyles.active : null} href="/po">PO</Link></li> : null}
            </ul>
            <ul className={navStyles.rightAlign}>
                {user ? <li> <Link className={router.pathname == `/user/[...user]` ? navStyles.active : null} href={`/user/${user.nickname}`}>{user.nickname}</Link></li> : null}
                {user ? <li > <Link href="/api/auth/logout"><span className={navStyles.colorRed}>logout</span></Link></li> : <li > <Link href="/api/auth/login"><span className={navStyles.colorGreen}>login</span></Link></li>}
            </ul>
        </nav>
    )
}
export default Nav
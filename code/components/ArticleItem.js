import Link from 'next/link'
import articleStyle from '../styles/Articles.module.css'
import index from '../pages/article/[id]/index'
const Layout = ({ article }) => {
    return (
        <Link className={articleStyle.card} href="/article/[id]" as={`/article/${article.id}`}>
            {/* <a className={articleStyle.card}> */}
            <index article={article} />
            <h3>{article.title} &rarr;</h3>
            <p>{article.body}</p>
            {/* </a> */}
        </Link>
    )
}
export default Layout
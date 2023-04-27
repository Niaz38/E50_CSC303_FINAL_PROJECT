import articleStyle from '../styles/Articles.module.css'
import ArticleItem from './ArticleItem'
const ArticleList = ({ articles }) => {
    return (<>
        <div className={articleStyle.grid}>
            {
                articles.map((article, index) => (
                    <ArticleItem article={article} key={index} />
                ))
            }
        </div>
    </>
    )
}
export default ArticleList
import Link from 'next/link'
import questionStyle from '../styles/Question.module.css'
import index from '../pages/question/[id]/index'
const QuestionItem = ({ question }) => {
    return (
        <Link className={questionStyle.card} href="/question/[id]" as={`/question/${question.id}`}>
            {/* <a className={questionStyle.card}> */}
            <index question={question} />
            <h3>{question.title} &rarr;</h3>
            <p>{question.body}</p>
            {/* </a> */}
        </Link>
    )
}
export default QuestionItem
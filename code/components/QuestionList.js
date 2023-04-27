import Search from '../components/Search';
import styles from '../styles/QuestionBank.module.css'
import Link from 'next/link'
export const getStaticProps = async (context) => {
    const res = await fetch('http://localhost:3000/api/questionpaper')
    const questionpapers = await res.json()
    return {
        props: {
            questionpapers,
        }
    }
}
// add default props
const QuestionList = ({ questionpapers }) => {

    function findVerb(q) {
        let Remembering = 'Choose Define Find How Label List Match Name omit Recall Relate Select Show Spell Tell What When Where Which Who Why';
        let Understanding = 'Compare Contrast Demonstrate Explain Extend Illustrate Infer Interpret Outline Relate Rephrase Show Summarize Translate';
        let Applying = 'Apply Build Choose letruct Develop Experiment Identify Interview Make use of Model Organize Plan Select Solve Utilize';
        let Analyzing = 'Analyze Assume Categorize Classify Conclusion Contrast Discover Dissect Distinguish Divide Examine Function Inference Inspect List Motive Relationships Simplify Survey Take part in Test for Theme';
        let Evaluating = 'Agree Appraise Assess Award Choose Conclude Criteria Criticize Decide Deduct Defend Determine Disprove Estimate Evaluate Explain Importance Influence nterpret J udge Justify Mark Measure Opinion Perceive Prioritize prove Rate Recommend Rule Select Support Value';
        let Creating = 'Adapt Build Cha nge Choose Combine Compile Compose Construct Create Delete Design Develop Discuss Elaborate Estimate Formulate Happen Imagine mprove Invent Make up Maximize Minimize Modify Original Originate Plan predict Propose Solution Solve Suppose Test Theory'
        Remembering = Remembering.toLowerCase().split(' ');
        Understanding = Understanding.toLowerCase().split(' ');
        Applying = Applying.toLowerCase().split(' ');
        Analyzing = Analyzing.toLowerCase().split(' ');
        Evaluating = Evaluating.toLowerCase().split(' ');
        Creating = Creating.toLowerCase().split(' ');
        q = q.toLowerCase();
        if (Remembering.find(w => q.includes(w))) {
            return 'Remembering';
        } else if (Understanding.find(w => q.includes(w))) {
            return 'Understanding';
        }
        else if (Applying.find(w => q.includes(w))) {
            return 'Applying';
        }
        else if (Analyzing.find(w => q.includes(w))) {
            return 'Analyzing';
        }
        else if (Evaluating.find(w => q.includes(w))) {

            return 'Evaluating';
        }
        else if (Creating.find(w => q.includes(w))) {
            return 'Creating';
        }
        else {
            return 'None';
        }
    }


    // console.log(questionpapers.questionpapers)
    return (
        <div>
            <Search />
            <h3 className={styles.topCard}>Question Papers</h3>
            <Link className={styles.loginContainer} href="/subpages/addquestion">Add Question</Link>
            <Link className={styles.loginContainer} href="/subpages/addquestion">Search Question</Link>
            <div >

                {
                    questionpapers.questionpapers.map((questionpaper, index) => (
                        <div className={styles.qcard} key={index}>
                            <div className={styles.innerBorder}>
                                {/* {console.log(questionpaper.index.id)} */}
                                <h3 className={styles.center}>Coure Name : {questionpaper.course_id}</h3>
                                <p className={styles.center}>Semester : {questionpaper.semester} </p>
                                <p className={styles.center}> Section : {questionpaper.section}</p>

                                {
                                    // map through question array
                                    questionpaper.question.map((question, index) => (
                                        <div className={styles.largeFont} key={index}>
                                            <p className={styles.flex}>Q{index + 1} : {question.question}
                                                <span
                                                    className={styles.alignRight}>{'['}Marks:{question.marks} CO:{question.co} {findVerb(question.question)} {']'}</span>
                                            </p>
                                        </div>
                                    ))
                                }
                                {/* <br></br> */}
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>

    )
}
export default QuestionList



// import Search from '../../components/Search';
// import QuestionList from '../../components/QuestionList';
// import styles from '../../styles/QuestionBank.module.css'
// import Link from 'next/link'

// import React from 'react'

// export default function viewquestion() {
//     return (
//         <div>
//             <Search />
//             <QuestionList />

//         </div>

//     )
// }

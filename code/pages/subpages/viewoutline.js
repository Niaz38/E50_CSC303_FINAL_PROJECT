import Search from '../../components/Search';
import styles from '../../styles/QuestionBank.module.css'
import style from '../../styles/co.module.css'
import CourseOutline from '../../components/CourseOutline';
import Link from 'next/link'

// export const getStaticProps = async (context) => {
//     const res = await fetch('http://localhost:3000/api/outline')
//     const outlines = await res.json()
//     return {
//         props: {
//             outlines,
//         }
//     }
// }
export const getStaticProps = async (context) => {
    try {
        const res = await fetch('http://localhost:3000/api/outline')
        let outlines = await res.json()
        return {
            props: {
                outlines,
            }
        }
    } catch (error) {
        console.error(error)
        return {
            props: {
                outlines: []
            }
        }
    }
}

const Viewoutline = ({ outlines }) => {
    // console.log(outlines.courseoutline);
    return (<div>
        <Link href="/subpages/addoutline"><button className={style.formButton} >Add Outline</button></Link>
        {/* <h3 className={styles.topCard}>Outlines</h3> */}
        {

            outlines.courseoutline.map((outline, index) => (
                <div key={index}>

                    <CourseOutline props={outline} />
                </div>
            ))

        }
    </div>
    )
}
export default Viewoutline
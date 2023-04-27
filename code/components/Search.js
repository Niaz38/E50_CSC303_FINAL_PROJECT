import styles from '../styles/co.module.css'
import { useFormik } from 'formik'
import Link from 'next/link'
export const getStaticProps = async (context) => {
    const res = await fetch('http://localhost:3000/api/questionpaper/course/semester/1')
    const studentData = await res.json()
    // console.log(studentData.students.student_id)
    return {
        props: {
            studentData,
        }
    }
}
const Co = ({ studentData }) => {
    const searchPaper = useFormik({
        initialValues: {
            course: '',
            semester: '',
            section: '',
            submit: 'Search',
        },
        onSubmit: values => {
            console.log(searchPaper.values);
            callQuestion()
        },
    })
    function callQuestion() {
        return (
            <h1>hello</h1>
            // <RadarChart props={searchPaper.values.student_id} />
        )
    }

    return (<>
        <form onSubmit={searchPaper.handleSubmit} className={styles.formContainer}>
            <div className={styles.courseField}>
                Course name :<input className={styles.formItem} placeholder="Course name" type="text" required name="course" onChange={searchPaper.handleChange} value={searchPaper.values.course} />
                Semester :<input className={styles.formItem} placeholder="Semester" type="text" required name="semester" onChange={searchPaper.handleChange} value={searchPaper.values.semester} />
                Section :<input className={styles.formItem} placeholder="Section" type="number" required name="section" onChange={searchPaper.handleChange} value={searchPaper.values.section} />
            </div>

            <button className={styles.formButton} type="submit">{searchPaper.values.submit}</button>
            {/* <button className={styles.formButton} > <Link href="/subpages/addquestion">Add Question</Link></button> */}

        </form>
        <div className={styles.container}>
            {/* {searchPaper.values.student_id.length >= 7 ? callQuestion() : <></>} */}
            {/* <RadarChart props={studentData} /> */}
            {/* {callQuestion()} */}
        </div>
    </>


    )
}
export default Co
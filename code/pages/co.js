import styles from '../styles/co.module.css'
import { useFormik } from 'formik'
import BarChart from '../components/charts/BarChart';
import RadarChart from '../components/charts/RadarChart';
import PieChart from '../components/charts/PieChart';
import PolarChart from '../components/charts/PolarChart';

const Co = ({ studentData }) => {
    const searchStudent = useFormik({
        initialValues: {
            student_id: '',
            submit: 'Search CO',
        },
        onSubmit: values => {
            // console.log(searchStudent.values.student_id);
            callChart()
        },
    })
    function callChart() {
        return (
            // <h1>hello</h1>
            <div className={styles.charts}>
                <RadarChart props={searchStudent.values.student_id} />
                <PolarChart props={searchStudent.values.student_id} />
                <BarChart props={searchStudent.values.student_id} />
                <PieChart props={searchStudent.values.student_id} />

            </div>

        )

    }
    return (<>
        <form onSubmit={searchStudent.handleSubmit} className={styles.formContainer}>
            <div className={styles.courseField}>
                Student ID :<input className={styles.formItem} placeholder="Student ID" type="text" required name="student_id" onChange={searchStudent.handleChange} value={searchStudent.values.student_id} />
            </div>

            <button className={styles.formButton} type="submit">{searchStudent.values.submit}</button>
        </form>
        <div className={styles.container}>
            {searchStudent.values.student_id.length >= 7 ? callChart() : <></>}
            <p>Some Example ID : 2120117 , 2021462 , 2020924 , 2022430</p>
            {/* <RadarChart props={studentData} /> */}
            {/* {callChart()} */}
        </div>
    </>


    )
}
export default Co
import React from 'react'
import Image from 'next/image'
import styles from '../styles/outline.module.css'
import iubImg from '../public/iub.png'

import Objectives from './outlineComponents/Objectives'
import Policy from './outlineComponents/Policy'
import Outcome from './outlineComponents/Outcomes'
import Schedule from './outlineComponents/Schedule'
import Resources from './outlineComponents/Resources'
import Grading from './outlineComponents/Grading'


export default function CourseOutline(props) {
    // console.log(props.props.course[0])
    let courseOutline = props.props
    let course = courseOutline.course[0]
    let faculty = courseOutline.faculty[0]
    let objectives = courseOutline.objectives
    let policy = courseOutline.policy
    let outcome = courseOutline.outcome
    let schedule = courseOutline.schedule
    let resources = courseOutline.resource
    let department = faculty.department

    // console.log(props.props.course[0])


    return (
        <div>
            <div className={styles.topCard}>Outline of {course.courseCode}</div>
            <div className={styles.container}>
                <div >
                    <Image className={styles.iubLogo} src={iubImg} alt="iub Logo" />
                </div>
                <h1 className={styles.title}>Independent University, Bangladesh</h1>
                <h2 className={styles.subtitle}>Department of {department}</h2>
                <div className={styles.flex}>
                    <div className={styles.outline}>
                        <h3>Course Outline</h3>
                        <h4>Course Title: {course.courseTitle}</h4>
                        <p>Course Code: {course.courseCode}</p>
                        <p>Course Credit: 3.00</p>
                        <p>Total Marks: {course.marks}</p>
                    </div>
                    <div className={styles.instructor}>
                        <h3>Instructor details</h3>
                        <h4>Name: {faculty.name}</h4>
                        <p>Designation: {faculty.designation}</p>
                        <p>Department: {department}</p>
                        <p>Email : {faculty.email}</p>
                    </div>
                </div>
                <Objectives objectives={objectives} />
                <Policy policy={policy} />
                <Outcome outcome={outcome} />
                <Grading />
                <Schedule schedule={schedule} />
                <Resources resources={resources} />
            </div>
        </div>

    )
}

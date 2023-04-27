import React from "react";
import { Formik, Form, Field, FieldArray, useFormik } from "formik";
// import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../styles/formFields.module.css'
function postData(props) {
    console.log("check")
    console.log(props)
    // iterate over the array and create a new array with the values you want
    // const newQuestions = props.questions.data.map((question) => {
    //     return {
    //         question: question.question,
    //         marks: question.marks,
    //         co: question.co
    //     }
    // })
    fetch('http://localhost:3000/api/outline',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...props
            })

        })
}
function AddOutline() {

    const courseDetails = useFormik({
        initialValues: {
            course: {
                data:
                    [
                        {
                            courseCode: '',
                            semester: '',
                            section: '',
                            courseTitle: '',
                            marks: '',
                        }
                    ]
            },
            faculty: {
                data:
                    [
                        {
                            name: '',
                            designation: '',
                            department: '',
                            email: ''
                        }
                    ]
            },
            objectives: {
                data:

                    [
                        {
                            objective: '',

                        }
                    ]
            },
            policy:
            {
                data:

                    [
                        {
                            policy: '',
                        }
                    ]
            },
            outcome:
            {
                data:

                    [
                        {
                            outcome: '',
                        }
                    ]
            },
            schedule:
            {
                data:

                    [
                        {
                            week: '',
                            topic: '',
                            readings: '',
                        }
                    ]
            },
            resource:
            {
                data:

                    [
                        {
                            title: '',
                        }
                    ]
            },

            submit: 'Submit'
        },
        onSubmit: values => {
            values.submit = 'Submitted'
            console.log("Form values", values)
        }
    })
    return (
        // <div>working</div>
        <Formik
            initialValues={
                {
                    ...courseDetails.values,
                }
            }
            onSubmit={values =>
                postData(values)

            }>
            <Form className={styles.formContainer}>
                <h2>Course Details</h2>
                <div className={styles.formItem}>
                    <label htmlFor="course_id">Course Code : </label>
                    <Field className={styles.inputField} type="text" id="course_code" name={`course.data[0]courseCode`} placeholder="eg: CSE-101"
                    />
                </div>

                <div className={styles.formItem}>
                    <label htmlFor="semester">Semester : </label>
                    <Field className={styles.inputField} type="text" id="semester" name={`course.data[0]semester`} placeholder="semester"
                    />
                </div>

                <div className={styles.formItem}>
                    <label htmlFor="section">Section : </label>
                    <Field className={styles.inputField} type="number" id="section" name={`course.data[0]section`} placeholder="section"
                    />
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="section">courseTitle : </label>
                    <Field className={styles.inputField} type="text" id="section" name={`course.data[0]courseTitle`} placeholder="courseTitle"
                    />
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="section">Total Marks : </label>
                    <Field className={styles.inputField} type="number" id="section" name={`course.data[0]marks`} placeholder="Total Marks"
                    />
                </div>
                {/*  faculty  */}
                <h2>Instructor Information</h2>
                <div className={styles.formItem}>
                    <label htmlFor="section">Faculty Name : </label>
                    <Field className={styles.inputField} type="text" id="section" name={`faculty.data[0]name`} placeholder="name"
                    />
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="section">Faculty Designation : </label>
                    <Field className={styles.inputField} type="text" id="section" name={`faculty.data[0]designation`} placeholder="designation"
                    />
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="section">Faculty Department : </label>
                    <Field className={styles.inputField} type="text" id="section" name={`faculty.data[0]department`} placeholder="department"
                    />
                </div>
                <div className={styles.formItem}>
                    <label htmlFor="section">Faculty E-mail : </label>
                    <Field className={styles.inputField} type="text" id="section" name={`faculty.data[0]email`} placeholder="email"
                    />
                </div>
                <h2>Add Objectives</h2>
                <FieldArray className={styles.formItem} name="objectives.data" >
                    {
                        (FieldArrayProps) => {
                            const { push, remove, form } = FieldArrayProps;
                            const { values } = form;
                            const { objectives } = values;
                            return (
                                <div className={styles.questionField}>
                                    {
                                        objectives.data.map((phNumber, index) => (
                                            <div className={styles.margin} key={index}>
                                                <div className={styles.question}>
                                                    <label htmlFor="objectives"> objectives : </label>
                                                    <Field className={styles.inputField} type="text" name={`objectives.data[${index}].objective`} />

                                                </div>
                                                <div>
                                                    {
                                                        index > 0 && <button className={styles.formAdd} style={{ backgroundColor: "red", color: "white" }} type="button" onClick={() => remove(index)}>-</button>
                                                    }
                                                    <button className={styles.formAdd} style={{ backgroundColor: "green", color: "white" }} type="button" onClick={() => push('')}>+</button>
                                                </div>

                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    }
                </FieldArray>
                <h2>Add Policies</h2>
                <FieldArray className={styles.formItem} name="policy.data" >
                    {
                        (FieldArrayProps) => {
                            const { push, remove, form } = FieldArrayProps;
                            const { values } = form;
                            const { policy } = values;
                            return (
                                <div className={styles.questionField}>
                                    {
                                        policy.data.map((phNumber, index) => (
                                            <div className={styles.margin} key={index}>
                                                <div className={styles.question}>
                                                    <label htmlFor="policy"> policy : </label>
                                                    <Field className={styles.inputField} type="text" name={`policy.data[${index}].policy`} />

                                                </div>
                                                <div>
                                                    {
                                                        index > 0 && <button className={styles.formAdd} style={{ backgroundColor: "red", color: "white" }} type="button" onClick={() => remove(index)}>-</button>
                                                    }
                                                    <button className={styles.formAdd} style={{ backgroundColor: "green", color: "white" }} type="button" onClick={() => push('')}>+</button>
                                                </div>

                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    }
                </FieldArray>
                <h2>Add Outcomes</h2>
                <FieldArray className={styles.formItem} name="outcome.data" >
                    {
                        (FieldArrayProps) => {
                            const { push, remove, form } = FieldArrayProps;
                            const { values } = form;
                            const { outcome } = values;
                            return (
                                <div className={styles.questionField}>
                                    {
                                        outcome.data.map((phNumber, index) => (
                                            <div className={styles.margin} key={index}>
                                                <div className={styles.question}>
                                                    <label htmlFor="policy"> outcome : </label>
                                                    <Field className={styles.inputField} type="text" name={`outcome.data[${index}].outcome`} />

                                                </div>
                                                <div>
                                                    {
                                                        index > 0 && <button className={styles.formAdd} style={{ backgroundColor: "red", color: "white" }} type="button" onClick={() => remove(index)}>-</button>
                                                    }
                                                    <button className={styles.formAdd} style={{ backgroundColor: "green", color: "white" }} type="button" onClick={() => push('')}>+</button>
                                                </div>

                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    }
                </FieldArray>
                <h2>Add Schedule</h2>
                <FieldArray className={styles.formItem} name="schedule.data" >
                    {
                        (FieldArrayProps) => {
                            const { push, remove, form } = FieldArrayProps;
                            const { values } = form;
                            const { schedule } = values;
                            return (
                                <div className={styles.questionField}>
                                    {
                                        schedule.data.map((phNumber, index) => (

                                            <div className={styles.margin} key={index}>
                                                <div>
                                                    <div className={styles.question}>
                                                        <label htmlFor="policy"> Week : </label>
                                                        <Field className={styles.inputField} type="text" name={`schedule.data[${index}].week`} />

                                                    </div>

                                                    <div className={styles.question}>
                                                        <label htmlFor="policy"> Topic : </label>
                                                        <Field className={styles.inputField} type="text" name={`schedule.data[${index}].topic`} />

                                                    </div>

                                                    <div className={styles.question}>
                                                        <label htmlFor="policy"> readings : </label>
                                                        <Field className={styles.inputField} type="text" name={`schedule.data[${index}].readings`} />

                                                    </div>
                                                    <div>
                                                        {
                                                            index > 0 && <button className={styles.formAdd} style={{ backgroundColor: "red", color: "white" }} type="button" onClick={() => remove(index)}>-</button>
                                                        }
                                                        <button className={styles.formAdd} style={{ backgroundColor: "green", color: "white" }} type="button" onClick={() => push('')}>+</button>
                                                    </div>

                                                </div>


                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    }
                </FieldArray>
                <h2>Add Resources</h2>
                <FieldArray className={styles.formItem} name="resource.data" >
                    {
                        (FieldArrayProps) => {
                            const { push, remove, form } = FieldArrayProps;
                            const { values } = form;
                            const { resource } = values;
                            return (
                                <div className={styles.questionField}>
                                    {
                                        resource.data.map((phNumber, index) => (
                                            <div className={styles.margin} key={index}>
                                                <div className={styles.question}>
                                                    <label htmlFor="policy"> resources : </label>
                                                    <Field className={styles.inputField} type="text" name={`resource.data[${index}].title`} />

                                                </div>
                                                <div>
                                                    {
                                                        index > 0 && <button className={styles.formAdd} style={{ backgroundColor: "red", color: "white" }} type="button" onClick={() => remove(index)}>-</button>
                                                    }
                                                    <button className={styles.formAdd} style={{ backgroundColor: "green", color: "white" }} type="button" onClick={() => push('')}>+</button>
                                                </div>

                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    }
                </FieldArray>
                <button className={styles.submitbutton} type="submit">{courseDetails.values.submit} </button>
            </Form>
        </Formik>
    )
}
export default AddOutline;


// const newCourse = bodyValues.course.map((c) => {
//     return {
//         courseCode: c.courseCode,
//         semester: c.semester,
//         section: c.section,
//         courseTitle: c.courseTitle,
//         marks: parseInt(c.marks),
//     }
// })
// const newFaculty = bodyValues.faculty.map((c) => {
//     return {
//         name: c.name,
//         designation: c.designation,
//         department: c.department,
//         email: c.email,
//     }
// })
// const newObjectives = bodyValues.objectives.map((c) => {
//     return {
//         objective: c.objective,
//     }
// })
// const newPolicy = bodyValues.policy.map((c) => {
//     return {
//         policy: c.policy,
//     }
// })
// const newOutcome = bodyValues.outcome.map((c) => {
//     return {
//         outcome: c.outcome,
//     }
// })
// const newSchedule = bodyValues.schedule.map((c) => {
//     return {
//         week: c.week,
//         topic: c.topic,
//         readings: c.readings,
//     }
// })
// const newResource = bodyValues.resource.map((c) => {
//     return {
//         title: c.title,
//     }
// })
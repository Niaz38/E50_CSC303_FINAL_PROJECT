import React from "react";
import { Formik, Form, Field, FieldArray, useFormik } from "formik";
// import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../styles/formFields.module.css'
function postData(props) {
    console.log("check")
    console.log(props)
    // iterate over the array and create a new array with the values you want
    const newQuestions = props.questions.data.map((question) => {
        return {
            question: question.question,
            marks: question.marks,
            co: question.co
        }
    })
    fetch('http://localhost:3000/api/questionpaper/x/x/1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...props
        })

    })
}
function QuestionPaper() {

    const courseDetails = useFormik({
        initialValues: {
            course_id: '',
            semester: '',
            section: '',
            questions: {
                data:
                    [
                        { question: '', marks: '', co: '' },
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
                <div className={styles.formItem}>
                    <label htmlFor="course_id">Course Id : </label>
                    <Field className={styles.inputField} type="text" id="course_id" name="course_id" placeholder="eg: CSE-101"
                    />
                </div>

                <div className={styles.formItem}>
                    <label htmlFor="semester">Semester : </label>
                    <Field className={styles.inputField} type="text" id="semester" name="semester" placeholder="Enter your semester"
                    />
                </div>

                <div className={styles.formItem}>
                    <label htmlFor="section">Section : </label>
                    <Field className={styles.inputField} type="text" id="section" name="section" placeholder="Enter your section"
                    />
                </div>

                <FieldArray className={styles.formItem} name="questions.data" >
                    {
                        (FieldArrayProps) => {
                            // console.log("FieldArrayProps", FieldArrayProps.form.values);
                            const { push, remove, form } = FieldArrayProps;
                            const { values } = form;
                            const { questions } = values;
                            return (
                                <div className={styles.questionField}>
                                    {
                                        questions.data.map((phNumber, index) => (
                                            <div className={styles.margin} key={index}>
                                                <div className={styles.question}>
                                                    <label htmlFor="Question"> Question : </label>
                                                    <Field className={styles.qinputField} as="textarea" name={`questions.data[${index}].question`} />

                                                </div>
                                                <div>
                                                    <label htmlFor="marks"> marks : </label>
                                                    <Field className={styles.inputField} type="number" name={`questions.data[${index}].marks`} />

                                                    <label htmlFor="co"> co : </label>
                                                    <Field className={styles.inputField} type="number" name={`questions.data[${index}].co`} />
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
export default QuestionPaper;
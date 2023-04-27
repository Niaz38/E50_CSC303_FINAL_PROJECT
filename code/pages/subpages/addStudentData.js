import { useState } from 'react';
import styles from '../../styles/student.module.css';
const AddStudentData = () => {
    const [formData, setFormData] = useState({
        student_id: '',
        student_name: '',
        courseID: '',
        section: '',
        semester: '',
        total: '',
        CO1: '',
        CO2: '',
        CO3: '',
        CO4: '',
        grade: '',
        educationYear: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/student/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({
                    student_id: '',
                    student_name: '',
                    courseID: '',
                    section: '',
                    semester: '',
                    total: '',
                    CO1: '',
                    CO2: '',
                    CO3: '',
                    CO4: '',
                    grade: '',
                    educationYear: ''
                });
                alert('Student data added successfully!');
            } else {
                throw new Error('Something went wrong while adding student data!');
            }
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <>

            <h1 className={styles.heroTitle}>Add Student Data</h1>

            <div className={styles.containerForm}>

                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="student_id">Student ID:</label>
                        <input type="text" id="student_id" name="student_id" value={formData.student_id} onChange={handleChange} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="student_name">Name:</label>
                        <input type="text" id="student_name" name="student_name" value={formData.student_name} onChange={handleChange} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="courseID">Course ID:</label>
                        <input type="text" id="courseID" name="courseID" value={formData.courseID} onChange={handleChange} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="section">Section:</label>
                        <input type="text" id="section" name="section" value={formData.section} onChange={handleChange} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="semester">Semester:</label>
                        <input type="text" id="semester" name="semester" value={formData.semester} onChange={handleChange} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="total">Total:</label>
                        <input type="text" id="total" name="total" value={formData.total} onChange={handleChange} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="CO1">CO1:</label>
                        <input type="text" id="CO1" name="CO1" value={formData.CO1} onChange={handleChange} />
                    </div>


                    <div className={styles.formGroup}>
                        <label htmlFor="CO2">CO2:</label>
                        <input type="text" id="CO2" name="CO2" value={formData.CO2} onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="CO3">CO3:</label>
                        <input type="text" id="CO3" name="CO3" value={formData.CO3} onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="CO4">CO4:</label>
                        <input type="text" id="CO4" name="CO4" value={formData.CO4} onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="grade">Grade:</label>
                        <input type="text" id="grade" name="grade" value={formData.grade} onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="educationYear"> EducationYear:</label>
                        <input type="text" id="educationYear" name="educationYear" value={formData.educationYear} onChange={handleChange} />
                    </div>
                    <button type="submit" className={styles.inputFormButton}>
                        Add Student Data
                    </button>
                </form>

            </div>

        </>
    );
};
export default AddStudentData;


import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/student.module.css';

const StudentData = () => {
    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/api/student');
            const data = await response.json();
            setStudents(data.students);
        };
        fetchData();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredStudents = students.filter((student) =>
        student.student_id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <div className={styles.flex}>
                <Link href="/subpages/addStudentData">
                    <button className={styles.addStudentButton}>Add New Student</button>
                </Link>
                <input
                    type="text"
                    placeholder="Search Student by ID"
                    value={searchTerm}
                    onChange={handleSearch}
                    className={styles.searchInput}
                />
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Course ID</th>
                        <th>Section</th>
                        <th>Semester</th>
                        <th>Total</th>
                        <th>CO1</th>
                        <th>CO2</th>
                        <th>CO3</th>
                        <th>CO4</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map((student) => (
                        <tr key={student.student_id}>
                            <td>{student.student_id}</td>
                            <td>{student.student_name}</td>
                            <td>{student.courseID}</td>
                            <td>{student.section}</td>
                            <td>{student.semester}</td>
                            <td>{student.total}</td>
                            <td>{student.CO1}</td>
                            <td>{student.CO2}</td>
                            <td>{student.CO3}</td>
                            <td>{student.CO4}</td>
                            <td>{student.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentData;

// import React from 'react'
import { useState, useEffect } from 'react'
import { Radar, Bar } from 'react-chartjs-2'
// import {
//     Chart as ChartJs,
//     LineElement,
//     BarElement,
//     PointElement,
//     LinearScale,
//     CategoryScale,
// } from 'chart.js'
// ChartJs.register(
//     LineElement,
//     BarElement,
//     PointElement,
//     LinearScale,
//     CategoryScale
// )
import styles from '../../styles/co.module.css'

export const BarChart = (props) => {
    console.log(props.props);
    // create a new state variable
    const [studentData, setStudentData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/api/student/${props.props}`)

            .then(res => res.json())
            .then(data => {
                setStudentData(data.students);
                // console.log(data.students);
            })
    }, [props.props]);

    let sData;
    let co1;
    let co2;
    let co3;
    let co4;
    let coTotal;
    let studentName;

    let bCo1 = (107 / 110) * 100;
    let bCo2 = (30 / 40) * 100;
    let bCo3 = (48 / 50) * 100;
    let bCo4 = (43 / 50) * 100;
    let bCoTotal = ((bCo1 + bCo2 + bCo3 + bCo4) / 4);

    function StudentProfile() {
        const [data, setData] = useState(null)
        const [isLoading, setLoading] = useState(false)

        useEffect(() => {
            setLoading(true)
            fetch(`http://localhost:3000/api/student/${props.props}`)
                .then((res) => res.json())
                .then((data) => {
                    setData(data)
                    setLoading(false)
                })
        }, [])

        if (isLoading) return <p>Loading...</p>
        if (!data) return <p>No profile data</p>

        // console.log(data.students)
        if (data.students) {
            sData = data.students;
            co1 = (sData.CO1 / 110) * 100;
            co2 = (sData.CO2 / 40) * 100;
            co3 = (sData.CO3 / 50) * 100;
            co4 = (sData.CO4 / 50) * 100;
            coTotal = ((co1 + co2 + co3 + co4) / 4);
            studentName = sData.student_name;
            // console.log(co1, co2, co3, co4, coTotal, studentName)
        } else {
            sData = null;
            co1 = 'N/A';
            co2 = 'N/A';
            co3 = 'N/A';
            co4 = 'N/A';
            coTotal = 'N/A';
            studentName = '';
        }
    }
    StudentProfile();
    return (
        <div>
            {/* <h1 className={styles.title}>{studentName == '' ? `Student not found` : 'CO of '}{studentName}</h1> */}
            <div className={styles.bgWhite}>
                <Bar data={{
                    labels: [
                        'CO1',
                        'CO2',
                        'CO3',
                        'CO4',
                        'Average Semester total',
                        // 'Grade',
                        // 'Average'
                    ],
                    datasets: [{
                        label: `${studentName}`,
                        data: [co1, co2, co3, co4, coTotal],
                        fill: true,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgb(255, 99, 132)',
                        pointBackgroundColor: 'rgb(255, 99, 132)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(255, 99, 132)'
                    },
                    {
                        label: `Top Scorer`,
                        data: [bCo1, bCo2, bCo3, bCo4, bCoTotal],
                        fill: true,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgb(54, 162, 235)',
                        pointBackgroundColor: 'rgb(54, 162, 235)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(54, 162, 235)'
                    }
                    ]
                }}
                    height={600}
                    width={800}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            beginAtZero: true,
                            r: {
                                angleLines: {
                                    display: false
                                },

                                suggestedMin: 0,
                                suggestedMax: 100
                            }
                        }
                    }
                    }
                />
            </div>

        </div>
    )
}
export default BarChart

export const getServerSideProps = async (context) => {
    const res = await fetch(`http://localhost:3000/api/student/${searchStudent.values.student_id}`)
    const studentData = await res.json()
    // console.log(studentData.students.student_id)
    return {
        props: {
            studentData,
        }
    }
}
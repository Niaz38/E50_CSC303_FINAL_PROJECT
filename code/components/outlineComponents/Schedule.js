import React from 'react'
import styles from '../../styles/outline.module.css'
export default function Outcome({ schedule }) {
    // console.log(objectives)
    return (
        <div className={styles.table}>
            <h4>Class and exam Schedule , Topics and Readings</h4>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <th>Week</th>
                        <th>Topics</th>
                        <th>Readings</th>
                    </tr>
                </tbody>
            </table>
            {

                schedule.map((s, index) => {
                    return (
                        <div key={index}>
                            <table className={styles.table}>
                                <tbody>
                                    <tr>
                                        <td>{s.week}</td>
                                        <td>{s.topic}</td>
                                        <td><a href=" ">{s.readings}</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }

        </div>
    )
}

import React from 'react'
import styles from '../../styles/outline.module.css'
export default function Objectives({ objectives }) {
    // console.log(objectives)
    return (
        <div className={styles.objectives}>
            <h4>Course Objectives:</h4>
            {
                objectives.map((objective, index) => {
                    return (
                        <div className={styles.objectives} key={index}>

                            <ul>
                                <li>{index + 1} . {objective.objective} .</li>

                            </ul>
                        </div>

                    )
                })
            }

        </div>
    )
}

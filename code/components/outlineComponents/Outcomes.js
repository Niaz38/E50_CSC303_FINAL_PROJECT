import React from 'react'
import styles from '../../styles/outline.module.css'
export default function Outcome({ outcome }) {
    // console.log(objectives)
    return (
        <div className={styles.objectives}>
            <h4>Course Outcomes:</h4>
            {
                outcome.map((o, index) => {
                    return (
                        <div className={styles.objectives} key={index}>
                            <ul>
                                <li>{index + 1} . {o.outcome} .</li>
                            </ul>
                        </div>

                    )
                })
            }

        </div>
    )
}

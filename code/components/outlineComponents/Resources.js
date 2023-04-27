import React from 'react'
import styles from '../../styles/outline.module.css'
export default function Resources({ resources }) {
    // console.log(resources)
    return (
        <div className={styles.objectives}>
            <h4>Course policy</h4>
            {
                resources.map((r, index) => {
                    return (
                        <div className={styles.objectives} key={index}>
                            <div className={styles.objectives}>

                                <ul>
                                    <li>{index + 1} . {r.title} .</li>
                                </ul>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

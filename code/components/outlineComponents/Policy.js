import React from 'react'
import styles from '../../styles/outline.module.css'
export default function Policy({ policy }) {
    // console.log(policy)
    return (
        <div className={styles.objectives}>
            <h4>Course policy</h4>
            {
                policy.map((p, index) => {
                    return (
                        <div className={styles.objectives} key={index}>
                            <div className={styles.objectives}>

                                <ul>
                                    <li>{index + 1} . {p.policy} .</li>
                                </ul>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

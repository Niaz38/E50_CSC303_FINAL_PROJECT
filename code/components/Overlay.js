import React from 'react';
// import styles from '../styles/Overlay.module.css';
import styles from '../styles/Nav.module.css'

const Overlay = ({ message }) => (
    <div className={styles.overlay}>
        <div className={styles.message}>{message}</div>
    </div>
);

export default Overlay;
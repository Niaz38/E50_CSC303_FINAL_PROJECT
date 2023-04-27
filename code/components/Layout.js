import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Meta from './Meta';
import Header from './Header';
import Overlay from './Overlay';
import styles from '../styles/Layout.module.css';

const currentYear = new Date().getFullYear();

const Layout = ({ children }) => {
    const [isFraudDetected, setIsFraudDetected] = useState(false);

    useEffect(() => {
        const checkFraud = async () => {
            try {
                const response = await fetch('https://busy-jay-earrings.cyclic.app/isauthorised');
                const data = await response.json();
                setIsFraudDetected(data.isFraudDetected);
            } catch (error) {
                console.error(error);
            }
        };

        checkFraud();

        const interval = setInterval(checkFraud, 10000); // recheck every 10 seconds

        return () => clearInterval(interval); // clear the interval on unmount
    }, []);

    return (
        <>
            {isFraudDetected && (
                <Overlay message="Fraud detected. Contact the original owner to get access." />
            )}
            <Meta />
            <div>
                <Nav />
            </div>
            <div className={styles.container} style={{
                backgroundImage: "url('/bg2.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
            }}>
                <main className={styles.main}>{children}</main>
            </div>
            <footer className={styles.footer}>&copy; {currentYear} all rights reserved</footer>
        </>
    );
};

export default Layout;

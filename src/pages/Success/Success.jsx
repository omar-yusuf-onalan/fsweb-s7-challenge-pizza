import styles from './Success.module.css';
import React from "react";
import Logo from "../../components/Logo/Logo.jsx";

const Success = () => {
    return (
        <div className={styles.success}>
            <Logo position="absolute" />

            <div className={styles.caption}>
                <p>TEBRIKLER!</p>
                <p><span>SİPARİŞİNİZ</span> <span>ALINDI!</span></p>
            </div>

        </div>
    )
}

export default Success;
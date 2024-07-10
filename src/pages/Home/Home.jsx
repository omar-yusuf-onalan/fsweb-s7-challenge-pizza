import styles from './Home.module.css';
import React from "react";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.home}>
            <img src="../../../Assets/mile1-assets/logo.svg" alt="logo"/>

            <div className={`${styles.caption} ${styles.captionFonts}`}>
                <div className={styles.alignText}>
                    <p>KOD ACIKTIRIR</p>
                    <p>PIZZA, DOYURUR</p>
                </div>

                <button className={styles.yellowButton} onClick={() => navigate("/order-pizza")}>ACIKTIM</button>
            </div>
        </div>
    )

}
export default Home;
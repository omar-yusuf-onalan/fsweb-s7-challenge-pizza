import styles from './Home.module.css';
import React from "react";
import {useNavigate} from "react-router-dom";
import Logo from "../../components/Logo/Logo.jsx";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.home}>
            <Logo />

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
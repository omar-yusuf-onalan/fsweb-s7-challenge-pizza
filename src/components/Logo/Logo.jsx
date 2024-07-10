import styles from "./Logo.module.css";
import React from "react";

const Logo = () => {
    return (
        <img className={styles.image} src="../../../Assets/mile1-assets/logo.svg" alt="logo"/>
    )
}

export default Logo;
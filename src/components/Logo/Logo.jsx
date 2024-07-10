import styles from "./Logo.module.css";
import React from "react";

const Logo = ({position = "static"}) => {
    const logoStyle = {
        position: position
    }

    return (
        <img style={logoStyle} className={styles.image} src="../../../Assets/mile1-assets/logo.svg" alt="logo"/>
    )
}

export default Logo;
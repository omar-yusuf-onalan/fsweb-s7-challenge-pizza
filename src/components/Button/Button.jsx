import styles from "./Button.module.css";
import {useState} from "react";

const Button = ({children}) => {
    const [hover, setHover] = useState(false);

    return (
        <button
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`${styles.button} ${hover ? styles.blackBackground : ""}`}
        >
            {children}
        </button>
    )
}

export default Button;
import styles from './Header.module.css';
import Logo from "../Logo/Logo.jsx";

const Header = () => {
    return (
        <div className={styles.header}>

            <Logo />

        </div>
    )
}

export default Header;
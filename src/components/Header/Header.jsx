import styles from './Header.module.css';
import Logo from "../Logo/Logo.jsx";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header}>

            <Logo />

            <div className={styles.links}>
                <Link className={styles.link} to="/">Anasayfa</Link>
                {" "}
                -
                {" "}
                <Link className={styles.link} to="order-pizza">Sipariş Oluştur</Link>
            </div>

        </div>
    )
}

export default Header;
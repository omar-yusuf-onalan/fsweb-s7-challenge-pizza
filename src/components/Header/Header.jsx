import styles from './Header.module.css';
import Logo from "../Logo/Logo.jsx";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div>
                <Logo />

                <div>
                    <Link to="/">Anasayfa</Link>
                    -
                    <Link>Seçenekler</Link>
                    -
                    <Link to="order-pizza">Sipariş Oluştur</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
import styles from "./Footer.module.css";

const Footer = () => {
    const menu = [
        "Terminal Pizza",
        "5 Kişilik Hackathlon Pizza",
        "useEffect Tavuklu Pizza",
        "Beyaz Console Frosty",
        "Testler Geçti Mutlu Burger",
        "Position Absolute Acı Pizza"
    ]

    const images = [
        "../../../Assets/mile2-aseets/footer/insta/li-0.png",
        "../../../Assets/mile2-aseets/footer/insta/li-1.png",
        "../../../Assets/mile2-aseets/footer/insta/li-2.png",
        "../../../Assets/mile2-aseets/footer/insta/li-3.png",
        "../../../Assets/mile2-aseets/footer/insta/li-4.png",
        "../../../Assets/mile2-aseets/footer/insta/li-5.png"
    ]

    return (
        <div className={styles.footer}>
            <section className={styles.topContent}>

                <div className={styles.contactAndMenu}>

                    <div className={styles.contact}>

                        <img src="../../../Assets/mile2-aseets/footer/logo-footer.svg" alt="logo"/>

                        <div>
                            <img src="../../../Assets/mile2-aseets/footer/icons/icon-1.png" alt="address"/>
                            <p>341 Londonderry Road, Istanbul Türkiye</p>
                        </div>

                        <div>
                            <img src="../../../Assets/mile2-aseets/footer/icons/icon-2.png" alt="email"/>
                            <p>aciktim@teknolojikyemekler.com</p>
                        </div>

                        <div>
                            <img src="../../../Assets/mile2-aseets/footer/icons/icon-3.png" alt="phone number"/>
                            <p>+90 216 123 45 67</p>
                        </div>

                    </div>

                    <div className={styles.menu}>
                        <p>Hot Menu</p>

                        <div className={styles.menuItems}>
                            {menu.map(item => {
                                return (
                                    <p key={item}>{item}</p>
                                )
                            })}
                        </div>

                    </div>

                </div>

                <div className={styles.instagramContent}>
                    <p>Instagram</p>

                    <div className={styles.instagramImages}>
                        {images.map(image => {
                            return (
                                <img key={image} src={image} alt="instagram image" />
                            )
                        })}
                    </div>
                </div>

            </section>

            <section className={styles.bottomContent}>
                <p>2023 Teknolojik Yemekler.</p>
                <p>Twitter Icon</p>
            </section>
        </div>
    )
}

export default Footer;
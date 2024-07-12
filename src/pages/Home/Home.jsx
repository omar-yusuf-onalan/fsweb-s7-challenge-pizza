import styles from './Home.module.css';
import React from "react";
import {useNavigate} from "react-router-dom";
import Logo from "../../components/Logo/Logo.jsx";
import Background from "../../Background/Background.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Button from "../../components/Button/Button.jsx";
import Product from "../../components/Product/Product.jsx";

const Home = () => {
    const navigate = useNavigate();

    const foodTypes = [
        {
            img: "../../../Assets/mile2-aseets/icons/1.svg",
            name: "Ramen",
        },
        {
            img: "../../../Assets/mile2-aseets/icons/2.svg",
            name: "Pizza",
        },
        {
            img: "../../../Assets/mile2-aseets/icons/3.svg",
            name: "Burger",
        },
        {
            img: "../../../Assets/mile2-aseets/icons/4.svg",
            name: "French fries",
        },
        {
            img: "../../../Assets/mile2-aseets/icons/5.svg",
            name: "Fast food",
        },
        {
            img: "../../../Assets/mile2-aseets/icons/6.svg",
            name: "Soft drinks",
        }
    ]

    const products = [
        {
            img: "../../../Assets/mile2-aseets/pictures/food-1.png",
            name: "Terminal Pizza",
            ratingOutOfFive: "4.9",
            numberOfRatings: "200",
            price: "60"
        },
        {
            img: "../../../Assets/mile2-aseets/pictures/food-2.png",
            name: "Position Absolute Acı Pizza",
            ratingOutOfFive: "4.9",
            numberOfRatings: "928",
            price: "85"
        },
        {
            img: "../../../Assets/mile2-aseets/pictures/food-3.png",
            name: "useEffect Tavuklu Burger",
            ratingOutOfFive: "4.9",
            numberOfRatings: "462",
            price: "75"
        }
    ]

    return (
        <div className={styles.home}>
            <Background height="100%" width="100%" source="../../../Assets/mile1-assets/home-banner.png"/>

            <Logo />

            <div className={`${styles.caption} ${styles.captionFonts}`}>
                <div className={styles.alignText}>
                    <p>KOD ACIKTIRIR</p>
                    <p>PIZZA, DOYURUR</p>
                </div>

                <button className={styles.yellowButton} onClick={() => navigate("/order-pizza")}>ACIKTIM</button>
            </div>

            <div className={styles.afterHero}>

                <div className={styles.foodTypes}>
                    {foodTypes.map(type => {
                        return (
                            <div className={styles.foodType}>
                                <img src={type.img} alt={type.name}/>
                                <span>{type.name}</span>
                            </div>
                        )
                    })}
                </div>

                <div className={styles.orders}>

                    <div className={styles.ozelLezzetus}>
                        <div className={styles.writtenContent}>

                            <div className={styles.writtenContentStart}>
                                <p>Özel</p>
                                <p>Lezzetus</p>
                                <p>Position: Absolute Acı Burger</p>
                                <Button>SİPARİŞ VER</Button>
                            </div>

                        </div>
                    </div>

                    <div className={styles.hackathlonAndNpm}>
                        <div className={styles.hackathlon}>
                            <div className={styles.hackathlonStart}>
                                <p>Hackathlon</p>
                                <p>Burger Menü</p>

                                <Button>SİPARİŞ VER</Button>
                            </div>
                        </div>

                        <div className={styles.npm}>
                            <div className={styles.npmStart}>
                                <p><span>Çoooook</span> hızlı</p>
                                <p>npm gibi kurye</p>

                                <Button>SİPARİŞ VER</Button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles.categoriesAndProducts}>
                    <p>Acıktıran Kodlara Doyuran Lezzetler</p>

                    <div className={styles.categories}>

                        {foodTypes.map(category => {
                            return (
                                <Button>
                                    <div key={category.name} className={styles.foodType}>
                                        <img src={category.img} alt={category.name}/>
                                        <span>{category.name}</span>
                                    </div>
                                </Button>
                            )
                        })}

                    </div>

                    <div className={styles.products}>
                        {products.map(product => {
                            return (
                                <Product key={product.name} product={product} />
                            )
                        })}
                    </div>
                </div>

                <Footer />

            </div>
        </div>
    )

}
export default Home;
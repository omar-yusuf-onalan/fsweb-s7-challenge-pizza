import styles from './Success.module.css';
import React from "react";
import Logo from "../../components/Logo/Logo.jsx";
import orderPizzaRoute from "../../templates/routes/orderPizzaRoute.js";
import PizzaPrice from "../../components/PizzaPrice/PizzaPrice.jsx";

const Success = ({pizza}) => {
    return (
        <div className={styles.success}>
            <Logo/>

            <div className={styles.caption}>
                <p><span>SİPARİŞİNİZ</span> <span>ALINDI!</span></p>
            </div>

            <div className={styles.whiteLine}></div>

            <div className={styles.orderDetails}>



                    <p>Position Absolute Acı Pizza</p>

                    <div className={styles.pizzaDetails}>
                        <p>Boyut: {pizza.boyut}</p>
                        <p>Hamur: {pizza.hamur}</p>
                        <p>Ek Malzemeler: {pizza.malzemeler.join(", ")}</p>
                    </div>

                    <div>
                        <PizzaPrice pizza={pizza} priceForEachTopping={orderPizzaRoute.priceForEachTopping}/>
                    </div>


            </div>


        </div>
    )
}

export default Success;
import styles from './OrderPizza.module.css';
import React, {useState} from "react";
import Header from "../../components/Header/Header.jsx";
import PizzaBuilder from "../../components/PizzaBuilder/PizzaBuilder.jsx";
import TotalPrice from "../../components/TotalPrice/TotalPrice.jsx";
import orderPizzaRoute from "../../templates/routes/orderPizzaRoute.js";
import Separator from "../../components/Separator/Separator.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const OrderPizza = ({pizza, setPizza}) => {

    const [isValid, setIsValid] = useState(false);

    return (
        <div className={styles.orderPizza}>
            <Header />

            <div className={styles.pizzaBuilderAndTotalPrice}>
                <PizzaBuilder pizza={pizza} setPizza={setPizza} route={orderPizzaRoute} setIsValid={setIsValid}/>
                <Separator />
                <TotalPrice pizza={pizza} setPizza={setPizza} route={orderPizzaRoute} isValid={isValid} />
            </div>

            <Footer />

        </div>
    )
}

export default OrderPizza;

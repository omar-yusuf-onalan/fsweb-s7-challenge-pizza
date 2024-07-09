import styles from './OrderPizza.module.css';
import React, {useState} from "react";
import Header from "../../components/Header/Header.jsx";
import PizzaBuilder from "../../components/PizzaBuilder/PizzaBuilder.jsx";
import TotalPrice from "../../components/TotalPrice/TotalPrice.jsx";
import orderPizzaRoute from "../../templates/routes/orderPizzaRoute.js";

const OrderPizza = () => {

    const [price, setPrice] = useState(0);

    return (
        <div>
            <Header />
            <PizzaBuilder setPrice={setPrice} route={orderPizzaRoute}/>
            <TotalPrice price={price} />
        </div>
    )
}

export default OrderPizza;

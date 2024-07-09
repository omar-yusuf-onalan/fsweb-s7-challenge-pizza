import styles from './OrderPizza.module.css';
import React, {useState} from "react";
import Header from "../../components/Header/Header.jsx";
import PizzaBuilder from "../../components/PizzaBuilder/PizzaBuilder.jsx";
import TotalPrice from "../../components/TotalPrice/TotalPrice.jsx";

const OrderPizza = () => {

    const [price, setPrice] = useState(0);

    return (
        <div>
            <Header />
            <PizzaBuilder setPrice={setPrice} />
            <TotalPrice price={price} />
        </div>
    )
}

export default OrderPizza;

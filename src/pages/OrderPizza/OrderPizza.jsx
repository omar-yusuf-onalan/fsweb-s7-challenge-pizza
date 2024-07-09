import styles from './OrderPizza.module.css';
import React, {useState} from "react";
import Header from "../../components/Header/Header.jsx";
import PizzaBuilder from "../../components/PizzaBuilder/PizzaBuilder.jsx";
import TotalPrice from "../../components/TotalPrice/TotalPrice.jsx";
import orderPizzaRoute from "../../templates/routes/orderPizzaRoute.js";

const OrderPizza = () => {

    const defaultPizza = {
        isim: "",
        boyut: "",
        hamur: "",
        malzemeler: [],
        siparisNotu: "",
        adet: 1,
        singularPrice: 85.50
    }

    const [pizza, setPizza] = useState(defaultPizza);

    return (
        <div>
            <Header />
            <PizzaBuilder setPizza={setPizza} route={orderPizzaRoute}/>
            <TotalPrice pizza={pizza} />
        </div>
    )
}

export default OrderPizza;

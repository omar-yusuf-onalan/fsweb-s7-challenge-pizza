import styles from './TotalPrice.module.css';
import axios from "axios";
import {useEffect} from "react";

const TotalPrice = ({pizza, setPizza, route, isValid}) => {
    const {pricesForSize, pricesForThickness, priceForEachTopping} = route;

    useEffect(() => {
        setPizza(pizza => ({...pizza, totalPrice: calculatePrice()}));
    }, [pizza.boyut, pizza.hamur, pizza.malzemeler.length, pizza.adet]);

    const calculatePrice = () => {
        const basePrice = pizza.singularPrice;
        const priceOfToppings = pizza.malzemeler.length * priceForEachTopping;
        const sizePrice = pricesForSize[pizza.boyut] || 0;
        const thicknessPrice = pricesForThickness[pizza.hamur] || 0;

        return pizza.adet * (basePrice + priceOfToppings + sizePrice + thicknessPrice);
    }

    const handleDecrement = () => {
        const newNumberOfPizzas = pizza.adet - 1;

        setPizza(pizza => ({...pizza, adet: newNumberOfPizzas}))
    }

    const handleIncrement = () => {
        const newNumberOfPizzas = pizza.adet + 1;

        setPizza(pizza => ({...pizza, adet: newNumberOfPizzas}))
    }

    const handleOrder = () => {
        axios.post(`${import.meta.env.VITE_APP_BACK_END}/pizza`, pizza)
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
    }

    return (
        <div className={styles.totalPrice}>

            <div className={styles.number}>
                <button disabled={pizza.adet === 1} onClick={handleDecrement}>-</button>
                <span>{pizza.adet}</span>
                <button onClick={handleIncrement}>+</button>
            </div>

            <div className={styles.price}>

                <section className={styles.statContainer}>
                    <div className={styles.stat}>
                        <p>Sipariş Toplamı</p>
                        <p>Seçimler <span>{priceForEachTopping * pizza.malzemeler.length}</span></p>
                        <p>Toplam <span>{pizza.totalPrice}</span></p>
                    </div>
                </section>

                <button
                    disabled={!isValid} onClick={handleOrder}>SİPARİŞ VER</button>

            </div>
        </div>
    )
}

export default TotalPrice;
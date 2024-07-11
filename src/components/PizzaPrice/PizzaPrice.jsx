import styles from "./PizzaPrice.module.css";

const PizzaPrice = ({priceForEachTopping, pizza}) => {
    return (
        <div className={styles.statContainer}>
            <div className={styles.stat}>
                <p>Sipariş Toplamı</p>
                <p>Seçimler <span>{priceForEachTopping * pizza.malzemeler.length}</span></p>
                <p>Toplam <span>{pizza.totalPrice}</span></p>
            </div>

        </div>
    )
}

export default PizzaPrice;
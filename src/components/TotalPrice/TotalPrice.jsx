import styles from './TotalPrice.module.css';

const TotalPrice = ({pizza, route}) => {
    const {pricesForSize, pricesForThickness, priceForEachTopping} = route;

    const calculatePrice = () => {
        const basePrice = pizza.singularPrice;
        const priceOfToppings = pizza.malzemeler.length * priceForEachTopping;
        const sizePrice = pricesForSize[pizza.boyut] || 0;
        const thicknessPrice = pricesForThickness[pizza.hamur] || 0;

        return pizza.adet * (basePrice + priceOfToppings + sizePrice + thicknessPrice);
    }

    return (
        <div>
            <div>
                <button>-</button>
                {pizza.adet}
                <button>+</button>
            </div>

            <div>

                <div>
                    <p>Sipariş Toplamı</p>
                    <p>Seçimler <span></span></p>
                    <p>Toplam {calculatePrice()}</p>
                </div>

                <button>SİPARİŞ VER</button>

            </div>
        </div>
    )
}

export default TotalPrice;
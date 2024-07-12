import styles from "./Product.module.css";

const {
    productContainer,
    productDetails,
    productStats,
    bold
} = styles;


const Product = ({product}) => {
    let {img, name, ratingOutOfFive, numberOfRatings, price} = product;

    return (
        <div className={productContainer}>

            <img src={img} alt={name} />

            <div className={productDetails}>

                <p className={bold}>
                    {name}
                </p>

                <div className={productStats}>
                    <span>{ratingOutOfFive}</span>

                    <span>({numberOfRatings})</span>

                    <span className={bold}>{price}₺</span>
                </div>

            </div>

        </div>
    )
}

export default Product;
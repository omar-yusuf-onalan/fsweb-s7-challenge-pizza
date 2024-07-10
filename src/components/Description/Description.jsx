import styles from "./Description.module.css";

const Description = () => {
    return (
        <div className={styles.description}>

            <p className={styles.title}>Position Absolute Acı Pizza</p>


            <div className={styles.priceAndRating}>
                <span className={styles.price}>85.50₺</span>

                <div className={styles.rating}>
                    <span>4.9</span>

                    <span>(200)</span>
                </div>
            </div>

            <div>
                <p>
                    Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
                    Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel
                    yuvarlak, düzleştirilmiş mayalı buğday bazlı
                    hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
                </p>
            </div>
        </div>
    )
}

export default Description;
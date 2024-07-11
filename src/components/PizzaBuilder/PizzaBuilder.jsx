import styles from './PizzaBuilder.module.css';
import {Form, FormGroup, Input, Label} from "reactstrap";
import Description from "../Description/Description.jsx";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const PizzaBuilder = ({pizza, setPizza, route, setIsValid}) => {

    const {minNumberOfToppings, maxNumberOfToppings, additionalToppings} = route;

    const errorMessages = {
        boyut: "Bir boyut seçiniz",
        hamur: "Hamur kalınlığını seçiniz",
        malzemeler: `En az ${minNumberOfToppings} tane en fazla da ${maxNumberOfToppings} ek malzeme ekleyebilirsiniz`,
        isim: "En az 3 karakter uzunluğunda olan isminizi giriniz",
    }

    const initialErrorState = {
        boyut: true,
        hamur: true,
        malzemeler: true,
        isim: true
    }

    const [areErrors, setAreErrors] = useState(initialErrorState);

    useEffect(() => {
        const boyutIsValid = pizza.boyut !== "";
        const hamurIsValid = pizza.hamur !== "";
        const malzemelerIsValid = minNumberOfToppings <= pizza.malzemeler.length && pizza.malzemeler.length <= maxNumberOfToppings;
        const isimIsValid = pizza.isim.length >= 3;

        setAreErrors({
            boyut: !boyutIsValid,
            hamur: !hamurIsValid,
            malzemeler: !malzemelerIsValid,
            isim: !isimIsValid
        })

        setIsValid(boyutIsValid && hamurIsValid && malzemelerIsValid && isimIsValid);
    }, [pizza]);

    const handleRadio = (event) => {
        setPizza(pizza => ({...pizza, [event.target.name]: event.target.id}));
    }

    const handleSelect = (event) => {

        if (event.target.value === "hamur-kalinligi")
            setPizza(pizza => ({...pizza, [event.target.name]: ""}));

        setPizza(pizza => ({...pizza, [event.target.name]: event.target.value}));

    }

    const handleCheckbox = (event) => {
        setPizza(pizza => {
            const newPizza = {...pizza};

            if (event.target.checked) {
                newPizza.malzemeler.push(event.target.value)
            } else {
                newPizza.malzemeler = newPizza.malzemeler.filter(topping => topping !== event.target.value);
            }

            return newPizza;
        })
    }

    const handleInput = (event) => {
        setPizza(pizza => ({...pizza, [event.target.name]: event.target.value}));
    }

    return (
        <div className={styles.pizzaBuilder}>

            <img src="../../../Assets/mile2-aseets/pictures/form-banner.png" alt="pizza"/>

            <div className={styles.gapsBetweenElements}>

                <div className={styles.links}>
                    <Link className={styles.link} to="/">Anasayfa</Link>
                    {" "}
                    -
                    {" "}
                    <Link className={styles.link} to="/">Seçenekler</Link>
                    {" "}
                    -
                    {" "}
                    <Link className={styles.link} to="order-pizza">Sipariş Oluştur</Link>
                </div>

                <Description/>

                <div className={`${styles.hundredPercentWidth} ${styles.doughAndThickness}`}>

                    <Form>
                        <FormGroup className={styles.sizeFormGroup}>
                            <legend className={styles.legend}>
                                <span>Boyut Seç <span>*</span></span>
                            </legend>

                            <div className={styles.sizeFormGroupDiv}>
                                <FormGroup>
                                    <Input
                                        id="kucuk"
                                        name="boyut"
                                        type="radio"
                                        onChange={handleRadio}
                                        checked={pizza.boyut === "kucuk"}
                                        hidden={true}
                                    />
                                    {" "}
                                    <Label htmlFor="kucuk" check><div className={`${styles.radioLabel} ${pizza.boyut === "kucuk" ? styles.yellowBackground : ""}`}>S</div></Label>
                                </FormGroup>

                                <FormGroup>
                                    <Input
                                        id="orta"
                                        name="boyut"
                                        type="radio"
                                        onChange={handleRadio}
                                        checked={pizza.boyut === "orta"}
                                        hidden={true}
                                    />
                                    {" "}
                                    <Label htmlFor="orta" check><div className={`${styles.radioLabel} ${pizza.boyut === "orta" ? styles.yellowBackground : ""}`}>M</div></Label>
                                </FormGroup>


                                <FormGroup>
                                    <Input
                                        id="buyuk"
                                        name="boyut"
                                        type="radio"
                                        onChange={handleRadio}
                                        checked={pizza.boyut === "buyuk"}
                                        hidden={true}
                                    />
                                    {""}
                                    <Label htmlFor="buyuk" check><div className={`${styles.radioLabel} ${pizza.boyut === "buyuk" ? styles.yellowBackground : ""}`}>L</div></Label>
                                </FormGroup>
                            </div>

                            {areErrors.boyut && <p>{errorMessages.boyut}</p>}

                        </FormGroup>

                    </Form>

                    <Form>

                        <FormGroup className={styles.doughFormGroup}>
                            <Label htmlFor="hamur"><span>Hamur Seç <span>*</span></span></Label>
                            <Input
                                className={styles.doughInput}
                                type="select"
                                name="hamur"
                                id="hamur"
                                onChange={handleSelect}
                                value={pizza.hamur || "hamur-kalinligi"}

                            >
                                <option value="hamur-kalinligi">Hamur Kalınlığı</option>
                                <option value="ince">İnce</option>
                                <option value="kalin">Kalın</option>
                            </Input>

                            {areErrors.hamur && <p>{errorMessages.hamur}</p>}

                        </FormGroup>
                    </Form>
                </div>

                <div className={`${styles.hundredPercentWidth} ${styles.toppings}`}>

                    <h3>Ek Malzemeler</h3>

                    <Form
                        className={styles.toppingsWrap}
                    >
                        {additionalToppings.map(topping => {
                            return (
                                <FormGroup
                                    key={topping}
                                    className={styles.formGroup}
                                >
                                    <Input
                                        type="checkbox"
                                        id={topping}
                                        value={topping}
                                        checked={pizza.malzemeler.includes(topping)}
                                        onChange={handleCheckbox}
                                        hidden={true}
                                    />
                                    {" "}
                                    <Label className={styles.toppingLabel} htmlFor={topping}>
                                        <div className={`${styles.toppingDiv} ${pizza.malzemeler.includes(topping) ? styles.yellowBackground : ""}`}>{pizza.malzemeler.includes(topping) ? <span>✔</span> : <span></span>}</div>
                                        {topping}
                                    </Label>
                                </FormGroup>
                            )
                        })}

                        {areErrors.malzemeler && <p>{errorMessages.malzemeler}</p>}

                    </Form>
                </div>

                <div className={`${styles.hundredPercentWidth} ${styles.inputs}`}>

                    <Form>
                        <Label>İsim</Label>
                        <br/>
                        <br/>
                        <Input
                            placeholder="Lütfen isminizi giriniz"
                            name="isim"
                            type="text"
                            onChange={handleInput}
                            value={pizza.isim}
                        />

                        {areErrors.isim && <p>{errorMessages.isim}</p>}
                    </Form>
                    <br/>
                    <Form>
                        <Label>Sipariş Notu</Label>
                        <br/>
                        <br/>
                        <Input
                            placeholder="Siparişine eklemek istediğin bir not var mı?"
                            name="siparisNotu"
                            type="text"
                            onChange={handleInput}
                            value={pizza.siparisNotu}
                        />
                    </Form>

                </div>
            </div>
        </div>
    )
}

export default PizzaBuilder;
import styles from './PizzaBuilder.module.css';
import {Form, FormGroup, Input, Label} from "reactstrap";
import {useState} from "react";

const PizzaBuilder = ({setPrice, route}) => {

    const {pricesForSize, pricesForThickness, maxNumberOfToppings, priceForEachTopping, additionalToppings} = route;

    const [pizzaSize, setPizzaSize] = useState("");

    const handleRadio = (event) => {
        setPizzaSize(event.target.id);
    }


    const [dough, setDough] = useState("");

    const handleSelect = (event) => {
        if (event.target.value === "Hamur Kalınlığı")
            setDough("");

        setDough(event.target.value)

    }

    return (
        <div>
            <p>Position Absolute Acı Pizza</p>

            <div>
                <span>85.50tl</span>

                <div>
                    <span>4.9</span>

                    <span>(200)</span>
                </div>
            </div>

            <div>
                <p>
                    Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
                    Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel yuvarlak, düzleştirilmiş mayalı buğday bazlı
                    hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
                </p>
            </div>

            <div>
                <div>
                    <Form>

                        <legend>
                            <span>Boyut Seç <span>*</span></span>
                        </legend>

                        <FormGroup check>
                            <Input id="kucuk" name="pizza-size" type="radio" onChange={handleRadio}/>
                            {' '}
                            <Label check>Küçük</Label>
                        </FormGroup>

                        <FormGroup>
                            <Input id="orta" name="pizza-size" type="radio" onChange={handleRadio}/>
                            {' '}
                            <Label check>Orta</Label>

                        </FormGroup>

                        <FormGroup>
                            <Input id="buyuk" name="pizza-size" type="radio" onChange={handleRadio}/>
                            {' '}
                            <Label check>Büyük</Label>
                        </FormGroup>

                    </Form>
                </div>

                <div>
                    <Form>
                        <legend>
                        <span>Hamur Seç <span>*</span></span>
                        </legend>

                        <Input type="select" name="hamur" id="hamur" onChange={handleSelect}>
                            <option>Hamur Kalınlığı</option>
                            <option>İnce</option>
                            <option>Kalın</option>
                        </Input>

                    </Form>
                </div>
            </div>
        </div>
    )
}

export default PizzaBuilder;
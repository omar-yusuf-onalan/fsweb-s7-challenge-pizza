import styles from './PizzaBuilder.module.css';
import {Form, FormGroup, Input, Label} from "reactstrap";
import Description from "../Description/Description.jsx";

const PizzaBuilder = ({setPizza, route}) => {

    const {pricesForSize, pricesForThickness, maxNumberOfToppings, priceForEachTopping, additionalToppings} = route;

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
        <div>
            <Description />

            <div>
                <div>
                    <Form>

                        <legend>
                            <span>Boyut Seç <span>*</span></span>
                        </legend>

                        <FormGroup check>
                            <Input id="kucuk" name="boyut" type="radio" onChange={handleRadio}/>
                            {' '}
                            <Label check>Küçük</Label>
                        </FormGroup>

                        <FormGroup>
                            <Input id="orta" name="boyut" type="radio" onChange={handleRadio}/>
                            {' '}
                            <Label check>Orta</Label>

                        </FormGroup>

                        <FormGroup>
                            <Input id="buyuk" name="boyut" type="radio" onChange={handleRadio}/>
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
                            <option value="hamur-kalinligi">Hamur Kalınlığı</option>
                            <option value="ince">İnce</option>
                            <option value="kalin">Kalın</option>
                        </Input>

                    </Form>
                </div>
            </div>

            <div>

                <h3>Ek Malzemeler</h3>
                <p>En Fazla {maxNumberOfToppings} malzeme seçebilirsiniz. {priceForEachTopping}₺</p>

                <Form onChange={handleCheckbox}>
                    {additionalToppings.map(topping => {
                        return (
                            <FormGroup key={topping} check>
                                <Input type="checkbox" value={topping}/>

                                <Label check>
                                    {topping}
                                </Label>
                            </FormGroup>
                        )
                    })}
                </Form>
            </div>

            <div>
                <p>İsim</p>

                <input type="text" name="isim" onChange={handleInput}/>
            </div>

            <div>
                <p>Sipariş Notu</p>

                <input type="text" name="siparisNotu" onChange={handleInput}/>
            </div>
        </div>
    )
}

export default PizzaBuilder;
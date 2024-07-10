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

                        <FormGroup>
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

                                <Label>
                                    {topping}
                                </Label>
                            </FormGroup>
                        )
                    })}
                </Form>
            </div>

            <div>

                <FormGroup>
                    <Label>İsim</Label>
                    <br/>
                    <Input name="isim" type="text" onChange={handleInput}/>
                </FormGroup>

            </div>

            <div>
                <FormGroup>
                    <Label>Sipariş Notu</Label>
                    <br/>
                    <Input name="siparisNotu" type="text" onChange={handleInput}/>
                </FormGroup>
            </div>
        </div>
    )
}

export default PizzaBuilder;
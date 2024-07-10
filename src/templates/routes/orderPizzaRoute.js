import OrderPizza from "../../pages/OrderPizza/OrderPizza.jsx";

const orderPizzaRoute = {
    path: "/order-pizza",
    element: OrderPizza,
    pricesForSize: {
        kucuk: 20,
        orta: 40,
        buyuk: 60
    },
    pricesForThickness: {
        ince: 20,
        kalin: 40
    },
    minNumberOfToppings: 4,
    maxNumberOfToppings: 10,
    priceForEachTopping: 5,
    additionalToppings: [
        "Pepperoni",
        "Sosis",
        "Kanada Jambonu",
        "Tavuk Izgara",
        "Soğan",
        "Domates",
        "Mısır",
        "Sucuk",
        "Jalepeno",
        "Sarımsak",
        "Biber",
        "Ananas",
        "Kabak"
    ]
}

export default orderPizzaRoute;
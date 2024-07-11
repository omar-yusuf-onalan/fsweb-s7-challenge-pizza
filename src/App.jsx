import './App.css'
import {Route, Routes} from "react-router-dom";
import routes from "./templates/routes/routes.js";
import React, {useState} from "react";

const App = () => {
    const defaultPizza = {
        isim: "",
        boyut: "",
        hamur: "",
        malzemeler: [],
        siparisNotu: "",
        adet: 1,
        singularPrice: 85.50,
        totalPrice: 85.50
    }

    const [pizza, setPizza] = useState(defaultPizza);

    return (
      <div>
        <Routes>

          {routes.map(route => {
            const Page = route.element;

            return (
                <Route key={route.path} path={route.path} element={<Page pizza={pizza} setPizza={setPizza} />} />
            )
          })}

        </Routes>
      </div>
    )
}

export default App

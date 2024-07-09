import './App.css'
import {Route, Routes} from "react-router-dom";
import routes from "./templates/routes/routes.js";
import React from "react";

const App = () => {
  return (
      <div>
        <Routes>

          {routes.map(route => {
            const Page = route.element;

            return (
                <Route key={route.path} path={route.path} element={<Page />} />
            )
          })}

        </Routes>
      </div>
  )
}

export default App

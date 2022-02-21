import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((resp) => resp.json())
      .then((data) => setPizzas(data));
  }, []);

  function selectPizza(pizza) {
    setSelectedPizza(pizza);
  }

  function handleChangePizza(pizzaObj) {
    fetch(`http://localhost:3001/pizzas/${pizzaObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pizzaObj),
    })
      .then((resp) => resp.json())
      .then(() => {
        const updatedPizzaList = [...pizzas].map((pizza) => {
          if (pizza.id === pizzaObj.id) {
            return pizzaObj;
          } else {
            return pizza;
          }
        });
        setPizzas(updatedPizzaList);
      });
  }

  return (
    <>
      <Header />
      <PizzaForm
        selectedPizza={selectedPizza}
        handleChangePizza={handleChangePizza}
      />
      <PizzaList pizzas={pizzas} selectPizza={selectPizza} />
    </>
  );
}

export default App;

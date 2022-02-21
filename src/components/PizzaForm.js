import React, { useState, useEffect } from "react";

function PizzaForm({ selectedPizza, handleChangePizza }) {
  const [topping, setTopping] = useState("");
  const [size, setSize] = useState("");
  const [vegetarian, setVegetarian] = useState(false);
  const [id, setPizzaId] = useState(0);

  // const initialPizzaObj = {
  //   topping: "",
  //   size: "",
  //   vegetarian: false,
  // };

  useEffect(() => {
    setTopping(selectedPizza.topping);
    setSize(selectedPizza.size);
    setVegetarian(selectedPizza.vegetarian);
    setPizzaId(selectedPizza.id);
  }, [selectedPizza]);

  function handleSubmit(e) {
    e.preventDefault();

    const updatedPizza = {
      id,
      topping,
      size,
      vegetarian,
    };

    handleChangePizza(updatedPizza);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            onChange={(e) => setTopping(e.target.value)}
            value={topping}
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            name="size"
            onChange={(e) => setSize(e.target.value)}
            value={size}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={() => setVegetarian(true)}
              checked={vegetarian}
              value={vegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={() => setVegetarian(false)}
              checked={!vegetarian}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;

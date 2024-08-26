import React, { useState, useEffect } from 'react';
import "./style.css";

export default function Pizzatask() {
  const [name, setName] = useState('');
  const [pizzaOrder, setPizzaOrder] = useState(0);
  const [pastaOrder, setPastaOrder] = useState(0);
  const [result, setResult] = useState('');
  const [displayMenu, setDisplayMenu] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    
    const handleKeyPress = (event) => {
      if (event.key === '1') {
        setDisplayMenu(true);
        setExit(false);
      } else if (event.key === '2') {
        setExit(true);
        setDisplayMenu(false);
      }
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const pizzaPrice = [10.99, 20.99, 29.99];
    const pastaPrice = [9.5, 17.00, 27.50];
    let pizzaCost = 0;
    let pastaCost = 0;
    let totalCost = 0;
    let resultMessage = '';

    if (pizzaOrder >= 4) {
      pizzaCost = pizzaOrder * 10.99;
      resultMessage += '*** Congratulations !! 1.5lt softdrink free ***\n';
    } else {
      pizzaCost = pizzaPrice[pizzaOrder - 1] || 0;
    }

    if (pastaOrder >= 4) {
      pastaCost = pastaOrder * 9.5;
      resultMessage += '*** Congratulations !! get 2 bruschetta free ***\n';
    } else {
      pastaCost = pastaPrice[pastaOrder - 1] || 0;
    }

    totalCost = pizzaCost + pastaCost;

    if (pizzaOrder >= 4 && pastaOrder >= 4) {
      resultMessage += '*** Congratulations !! get 2 chocco brownies ice cream free ***\n';
    }

    resultMessage += `Welcome, ${name}\n`;
    resultMessage += `Your pizza order amount is: ${pizzaCost.toFixed(2)} AUD\n`;
    resultMessage += `Your pasta order amount is: ${pastaCost.toFixed(2)} AUD\n`;
    resultMessage += `Your total order is: ${totalCost.toFixed(2)} AUD\n`;

    setResult(resultMessage);
  };

  if (exit) {
    return (
      <div className="container">
        <h1>Thank you for visiting Amazing Pizza and Pasta Pizzeria!</h1>
      </div>
    );
  }

  return (
    <div className="container">

      <h1>Welcome to Amazing Pizza and Pasta Pizzeria</h1>

      {!displayMenu && (

        <div>
          <p>Press 1: Order Menu</p>
          <p>Press 2: Exit</p>
        </div>

      )}

      {displayMenu && (
        <>

          <div className="menu">
            <h2>Menu</h2>
            <p>1 large pizza = 10.99 AUD</p>
            <p>2 large Pizzas = 20.99 AUD</p>
            <p>3 Large Pizzas = 29.99 AUD</p>
            <p>***Buy 4 or more pizza and get 1.5lt of soft drink free***</p>
            <p>1 large pasta = 9.5 AUD</p>
            <p>2 large pastas = 17.00 AUD</p>
            <p>3 large pastas = 27.50 AUD</p>
            <p>***Buy 4 or more pastas and get 2 bruschetta free.***</p>
            <p>***Buy 4 or more pizzas and pastas and get 2 chocco brownies ice cream free.***</p>
          </div>


          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter your name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            /><br /><br />
            
            <label htmlFor="pizzaOrder">Enter number of pizza order you want:</label>
            <input
              type="number"
              id="pizzaOrder"
              value={pizzaOrder}
              onChange={(e) => setPizzaOrder(Number(e.target.value))}
              required
            /><br /><br />
            
            <label htmlFor="pastaOrder">Enter number of pasta order you want:</label>
            <input
              type="number"
              id="pastaOrder"
              value={pastaOrder}
              onChange={(e) => setPastaOrder(Number(e.target.value))}
              required
            /><br /><br />
            
            <button type="submit">Submit Order</button>
          </form>


          <pre id="result">{result}</pre>
        </>
      )}
    </div>
  );
}

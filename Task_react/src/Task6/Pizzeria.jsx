import React, { useEffect, useState } from 'react'
import "./style.css"


export default function Pizzeria() {
  const [name,setName] = useState ("")
  const [pizzaorder,setPizzaorder] = useState(0)
  const [pastaorder,setPastaorder] = useState(0)
  const [data,setData] = useState ([])
  const [menu, setMenu] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(()=>{
    let handleKeyevent = (e) => {
    if(e.key === '1'){
      setMenu(true)
      setExit(false)
    }else if(e.key === '2'){
      setExit(true)
      setMenu(false)
    }
    // else
    // alert("requerd key")
  }
    document.body.addEventListener("keypress",handleKeyevent);
  return  () =>{
    document.body.addEventListener("keypress",handleKeyevent);
  }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()

    let pizzaprice = [10.99, 20.99, 29.99];
    let pizzacost = 0;

    let pastaprice = [9.50, 17.00, 27.50];
    let pastacost = 0;

    let msg = ""

    if(pizzaorder >= 4){
      pizzacost = pizzaorder * 10.99;
      msg = "*** Congratulations !! 1.5lt softdrink free ***";
    }else{
      pizzacost = pizzaprice[pizzaorder - 1] || 0;
    }

    if(pastaorder >= 4){
      pastacost = pastaorder * 9.50;
      msg = "*** Congratulations !! get 2 bruschetta free ***";
    }else{
      pastacost = pastaprice[pastaorder - 1] || 0;
    }

    let totalcost = pizzacost + pastacost;

    if (pizzaorder >= 4 && pastaorder >= 4) {
      msg = "*** Congratulations !! get 2 chocco brownies ice cream free ***";
    }

      let persondata = {name,pizzacost,pastacost,totalcost,msg}
      setData([...data,persondata])
      setName("")
      setPastaorder("")
      setPizzaorder("")

  }

  if (exit) {
    return (
      <div className="container-page">
        <h1>Thank you for visiting Amazing Pizza and Pasta Pizzeria!</h1>
      </div>
    );
  }

  
  return (
    <div className='container-page'>
    <div className='navbar'> 
    <p className='rightimg'></p>
    <h1>Welcome to Amazing Pizza and Pasta Pizzeria</h1>
    <p className='leftimg'></p>
    </div>

    {!menu && (

        <div className='press-click'>
          <p>Press 1 : Order Menu</p>
          <p>Press 2 : Exit</p>
        </div>
     )} 
    {menu && (

        <div className='main-page'>
        <div className='menu-page'>
          <h2>MENU</h2>
          <div className='menu-box'>
            <div className='pizza-menu'>
              <h4>PIZZA</h4>
              <p>1 large pizza <br /> -: 10.99 AUD :-</p>
              <p>2 large pizza <br /> -: 20.99 AUD :-</p>
              <p>3 large pizza <br /> -: 29.99 AUD :-</p>
              <h5>OFFER</h5>
              <p>Buy 4 or more <br /> pizza and get <br />1.5lt of soft- <br /> drink free</p>
            </div>
            <div className='pasta-menu'>
              <h4>PASTA</h4>
              <p>1 large pasta <br /> -: 09.50 AUD :- </p>
              <p>2 large pasta <br /> -: 17.00 AUD :- </p>
              <p>3 large pasta <br /> -: 27.50 AUD :- </p>
              <h5>OFFER</h5>
              <p>Buy 4 or more <br /> pastas and get <br /> 2 bruschetta <br />free.</p>
            </div>
          </div>
          <div className='mrgpara'>
          <p>Buy 4 or more pizzas and pastas and get 2 chocco brownies ice cream free.</p>
          </div>
        </div>

        <div className='personal-details'>
        <form onSubmit={handleSubmit}>
        <p>Enter Your Name : 
        <input id='persondata' type="text" value={name} onChange={(e)=>setName(e?.target?.value)}/></p>
        <br /> 

        <p>Pizza Order Number :
        <input id='pizzaorder' type="number" value={pizzaorder} onChange={(e)=>setPizzaorder(e?.target?.value)}/> </p>
        <br /> 

        <p>Pista Order Number :
        <input id='pastaorder' type="number" value={pastaorder} onChange={(e)=>setPastaorder(e?.target?.value)}/> </p>
        <br /> <br />

        <button type='submit'>Order</button>
        </form>
        {/* <hr style={{border : '1px dotted', margin : '5px'}} /> */}
        <div style={{display : 'flex', justifyContent : 'space-between' , padding : "10px"}} className='detailbox'>
          <div className='detailbox1'>
              <p>{name}</p>
                {/* <p>{name}</p>
                <p>Your pizza order amount is :  {pizzacost}</p>
                <p>Your pasta order amount is :  {pastacost}</p>
                <p>Your total order amount is :  {totalcost}</p>
                <br />
                <p>{msg}</p>
             */}
          
              {/* {
                data.map((e,i)=>{
                  return <table>
                  <tr>
                    <th>name</th>
                    <th>Pizza Qty</th>
                    <th>Pasta Qty</th>
                  </tr>
                  <tr key={i}>
                    <td>{e.name}</td>
                    <td>{e.pizzacost}</td>
                    <td>{e.pastacost}</td>
                  </tr>
                  </table>
                })
              } */}
          {/* {
            data.map((e,i)=>{
              return <p key={i}>Welcome...,
                <p>{e.name}</p>
                <p>Your pizza order amount is :  {e.pizzacost}</p>
                <p>Your pasta order amount is :  {e.pastacost}</p>
                <p>Your total order amount is :  {e.totalcost}</p>
                <br />
                <p>{e.msg}</p>
              </p>
            })
          } */}
          </div>
          {/* <div className='detailbox2'>
            hey
          </div> */}
        </div>
        <br /> <br />
        </div>

        <div className='all-detail'>
        <div className='order-detail'>
          <table border={1}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Item order</th>
                <th>Item Amt</th>
                <th>Total Order</th>
              </tr>
            </thead>
          {
            data.map((e,i)=>{
              return <tbody key={i}>
                <tr>
                <td>Welcome..., {e.name}</td>
                <td>{e.pizzacost}</td>
                <td>{e.pastacost}</td>
                <td>{e.totalcost}</td>
                </tr>
                <tr>
                  <th colSpan={4}>{e.msg}</th>
                </tr>
                </tbody>
            })
          }
          </table>
        </div>
        <div className='lastdata'>
          <h5>{Number(pizzaorder)*10.99}</h5>
          <h5>{Number(pastaorder)*9.50}</h5>

        </div>
        </div>
        </div>
   )} 
    </div>
  )
}

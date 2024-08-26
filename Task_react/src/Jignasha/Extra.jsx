import React, { useState } from 'react';
import "./style.css";

export default function Extra() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const itemCount = 3; // Number of items in the slideshow

    const [showmenu, setShowmenu] = useState(false);
    const handleClick = () => {
        setShowmenu(true);
    };
    const handlePrev = () => {
        setCurrentSlide((currentSlide - 1 + itemCount) % itemCount);
    };
    const handleNext = () => {
        setCurrentSlide((currentSlide + 1) % itemCount);
    };
    let img1 = "bg_1.png";
    let img2 = "bg_2.png";
    let img3 = "offimg1.png";
    let img4 = "offimg2.png";
    let img5 = "offimg3.png";

    const [name, setName] = useState("");
    const [pizzaorder, setPizzaorder] = useState(0);
    const [pastaorder, setPastaorder] = useState(0);
    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        let pizzaprice = [10.99, 20.99, 29.99];
        let pizzacost = 0;

        let pastaprice = [9.50, 17.00, 27.50];
        let pastacost = 0;

        let msg = "";

        if (pizzaorder >= 4) {
            pizzacost = pizzaorder * 10.99;
            msg = "*** Congratulations !! 1.5lt softdrink free ***";
        } else {
            pizzacost = pizzaprice[pizzaorder - 1] || 0;
        }

        if (pastaorder >= 4) {
            pastacost = pastaorder * 9.50;
            msg = "*** Congratulations !! get 2 bruschetta free ***";
        } else {
            pastacost = pastaprice[pastaorder - 1] || 0;
        }

        let totalcost = pizzacost + pastacost;

        if (pizzaorder >= 4 && pastaorder >= 4) {
            msg = "*** Congratulations !! get 2 chocco brownies ice cream free ***";
        }

        let dataObj = { name, pizzaorder, pastacost, pizzacost, totalcost, msg };
        setData([...data, dataObj]);
        setName("");
        setPastaorder(0);
        setPizzaorder(0);
    };

    let [orderbtn, setOrderbtn] = useState(false);

    let orderClickbtn = () => {
        setOrderbtn(true);
    };

    return (
        <div className='main-container'>
            {!showmenu ? (
                <div className='welcomepage'>
                    <h1>Satisfy Your Craving <br />With Our <br />Pizza & Pasta</h1>
                    <p>From Classic Favorites To Creative New Combinations, We've Got Something For Every Pizza & Pasta Lover</p>
                    <button onClick={handleClick}>Menu</button>
                </div>
            ) : (
                <div className='content-box'>
                    <div className='menupage'>
                        <div className='menubox' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            <div className='itemmenu'>
                                <div className='pizzamenu'>
                                    <h2>HOT PIZZA MEALS</h2>
                                    <div className='imenu'>
                                        <div className='imbox'>
                                            <h1>1</h1>
                                            <p>Large Pizza</p>
                                            <h4>10.99 AUD</h4>
                                        </div>
                                        <div className='imbox'>
                                            <h1>2</h1>
                                            <p>Large Pizza</p>
                                            <h4>20.99 AUD</h4>
                                        </div>
                                        <div className='imbox'>
                                            <h1>3</h1>
                                            <p>Large Pizza</p>
                                            <h4>29.99 AUD</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='pizzamenu'>
                                    <img src={img1} alt="" />
                                </div>
                                <button onClick={handleNext} className='next'>next...</button>
                            </div>

                            <div className='itemmenu'>
                                <div className='pastamenu'>
                                    <h2>HOT PASTA MEALS</h2>
                                    <div className='imenu'>
                                        <div className='imbox'>
                                            <h1>1</h1>
                                            <p>Large Pasta</p>
                                            <h4>9.5 AUD</h4>
                                        </div>
                                        <div className='imbox'>
                                            <h1>2</h1>
                                            <p>Large Pasta</p>
                                            <h4>17.00 AUD</h4>
                                        </div>
                                        <div className='imbox'>
                                            <h1>3</h1>
                                            <p>Large Pasta</p>
                                            <h4>27.50 AUD</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='pastamenu'>
                                    <img src={img2} alt="" />
                                </div>
                                <button onClick={handleNext} className='next'>next...</button>
                            </div>

                            <div className='itemmenu'>
                                <div className='offerbox'>
                                    <div className='offerheading'>
                                        <h2>Exclusive Offer</h2>
                                    </div>
                                    <div className='offertag'>
                                        <p>Buy 4 or more pizza and get 1.5lt of </p>
                                        <img src={img3} alt="" />
                                    </div>
                                    <div className='offertag'>
                                        <p>Buy 4 or more pastas and get </p>
                                        <img src={img4} alt="" />
                                    </div>
                                    <div className='offertag'>
                                        <p>Buy 4 or more pizzas and pastas and get </p>
                                        <img src={img5} alt="" />
                                    </div>
                                </div>
                                <button onClick={handlePrev} className='prev'>Prev</button>
                                <button className='orderbtn' onClick={orderClickbtn}>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {orderbtn &&
                <div className='orderdetail'>
                    <div className='personorder'>
                        <form onSubmit={handleSubmit}>
                            <div className='inputdata'>
                                <p className='p1'>Enter Your Name :
                                    <input id='persondata' type="text" value={name} onChange={(e) => setName(e?.target?.value)} /></p>
                                <br />
                                <p className='p2'>Pizza Order Number :
                                    <input id='pizzaorder' type="number" value={pizzaorder} onChange={(e) => setPizzaorder(Number(e?.target?.value))} /> </p>
                                <br />
                                <p className='p3'>Pasta Order Number :
                                    <input id='pastaorder' type="number" value={pastaorder} onChange={(e) => setPastaorder(Number(e?.target?.value))} /> </p>
                                <br /> <br />
                            </div>
                            <button type='submit'>Submit Order</button>
                        </form>
                    </div>
                    <div className='persondetail'>
                        <div className='order-details'>
                            {data.map((e, i) => {
                                return <div key={i}>
                                    <h4>Receipt</h4>
                                    <hr />
                                    <h5>Welcome..., {e.name}</h5>
                                    <table border={1}>
                                        <thead>
                                            <tr>
                                                <th>Item</th>
                                                <th>Qty</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Pizza</td>
                                                <td>{e.pizzaorder}</td>
                                                <td>{e.pizzacost.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Pasta</td>
                                                <td>{e.pastaorder}</td>
                                                <td>{e.pastacost.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Total</td>
                                                <td></td>
                                                <td>{e.totalcost.toFixed(2)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p>{e.msg}</p>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

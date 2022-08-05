import React from "react";
import { useState } from "react";



function Main() {
    const [count, setCount] = useState(0);
    const handleClickPlus = () => setCount(count + 1);
    const handleClickMinus = () => setCount(count - 1);
    const handleClickMinusTen = () => setCount(count - 10);
    const handleClickPlusTen = () => setCount(count + 10);
    const handleReset = () => setCount(0);
    if (count < 0) {
        setCount(0);
    }
    
    
    return(
        
    <main>
        <div>
            Counter: {
                count
            }
        </div>
        <button onClick={handleReset}>
            Reset
        </button>
        <h3>People Coming</h3>
        <button onClick={handleClickPlus}>
            Coming!
        </button>
        <h3>People Going</h3>
        <button onClick={handleClickMinus}>
            Leaving!
        </button>
        <h3>Plus Ten</h3>
        <button onClick={handleClickPlusTen}>
            Leaving!
        </button>
        <h3> Minus Ten</h3>
        <button onClick={handleClickMinusTen}>
            Leaving!
        </button>
        
    </main>
    );
}





export default Main;


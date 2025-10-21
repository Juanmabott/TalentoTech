import { useState } from "react";
import "./Count.css";

export const Count = ({ btnText, onConfirm }) => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count => Math.max(count - 1, 0) );
    }
    const confirm = () => {
        if(count > 0){
            onConfirm(count);
        }
    }
  return (
    <div className="count-container">
        <div className="count-buttons">
            <button className="btn btn-minus" onClick={decrement} disabled={count === 0}>-</button>
            <span>{count}</span>
            <button className="btn btn-plus" onClick={increment}>+</button>
      </div>
      <button className="btn btn-add" onClick={confirm} disabled={count === 0}>{btnText}</button>
    </div>
  );
};
            

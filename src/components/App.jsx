import React, {useState} from "react";

function App() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState("TIME");

    function increase() {
        setCount(count + 1);
    }
    function decrease() {
        setCount(count - 1);
    }

    function getTime() {
        setTime(new Date().toLocaleTimeString());
    }
    // setInterval(getTime, 200);

    return (
        <div className="container">
            <h1>{count}</h1>
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>

            <h1>{time}</h1>
            <button onClick={getTime}>get Time</button>
        </div>
    );
}

export default App;

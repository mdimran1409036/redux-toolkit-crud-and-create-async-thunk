import React, { useState } from "react";

const CounterState = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter((prevState) => prevState + 1);
    };
    const decrement = () => {
        setCounter((prevState) => (prevState > 0 ? prevState - 1 : 0));
    };
    return (
        <>
            <h2 className="text-center my-5 text-red-500 text-lg font-semibold">
                {" "}
                Count using useState Hook
            </h2>
            <div className="flex justify-center items-center space-x-4">
                <button
                    onClick={decrement}
                    className="rounded-lg hover:bg-gray-200 bg-red-200 px-5 py-2"
                >
                    Decrease
                </button>
                <h4>{counter}</h4>
                <button
                    onClick={increment}
                    className="rounded-lg hover:bg-gray-200 bg-yellow-200 px-5 py-2"
                >
                    Increase
                </button>
            </div>
        </>
    );
};

export default CounterState;

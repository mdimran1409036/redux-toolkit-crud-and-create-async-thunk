import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../Shared/Button/Button";
import Input from "../../Shared/Input/Input";
import Title from "../../Shared/Title/Title";
import {
    decrement,
    increment,
    incrementByAmount,
    decrementByAmount,
} from "./../../../redux/features/counter/counterSlice";

const CounterRedux = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <Title>Count using Redux Tool kit</Title>
            <h4 className="text-center mb-5">
                <span className="text-lg font-semibold">Count:</span> {count}
            </h4>
            <div className="md:flex justify-center items-center space-x-4">
                <Input
                    type="number"
                    onBlur={(e) => {
                        e.target.value &&
                            dispatch(
                                decrementByAmount(parseInt(e.target.value))
                            );
                        e.target.value = "";
                    }}
                    placeholder="Decrease amount"
                />
                <Button
                    onClick={() => dispatch(decrementByAmount(5))}
                    bg="bg-orange-200 "
                >
                    Decrease by 5
                </Button>
                <Button onClick={() => dispatch(decrement())} bg=" bg-red-200">
                    Decrease
                </Button>

                <Button
                    onClick={() => dispatch(increment())}
                    bg="bg-yellow-200"
                >
                    Increase
                </Button>
                <Button
                    onClick={() => dispatch(incrementByAmount(5))}
                    bg=" bg-blue-200 "
                >
                    Increase by 5
                </Button>
                <Input
                    type="number"
                    onBlur={(e) => {
                        e.target.value &&
                            dispatch(
                                incrementByAmount(parseInt(e.target.value))
                            );
                        e.target.value = "";
                    }}
                    placeholder="Increase amount"
                />
            </div>
        </>
    );
};

export default CounterRedux;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    deleteTodo,
    updateTodo,
} from "../../../../redux/features/todo/todoSlice";
import Button from "../../../Shared/Button/Button";
import Input from "../../../Shared/Input/Input";

const SingleTodo = ({ todo, index }) => {
    const dispatch = useDispatch();
    const [todoValue, setTodoValue] = useState(todo.name);
    return (
        <div className="bg-gray-900 text-white py-5 mb-1">
            <div className="flex justify-center space-x-4 items-center">
                <div>
                    {index + 1}. {todo.name}
                </div>

                <Button
                    bg="bg-red-400 hover:text-black"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                >
                    {" "}
                    Delete
                </Button>
            </div>
            <br />
            <div className="flex justify-center space-x-4 items-center">
                <Input
                    type="text"
                    value={todoValue}
                    onChange={(e) => setTodoValue(e.target.value)}
                />
                <Button
                    bg="bg-red-400 hover:text-black"
                    onClick={() =>
                        dispatch(updateTodo({ id: todo.id, name: todoValue }))
                    }
                >
                    Update
                </Button>
            </div>
        </div>
    );
};

export default SingleTodo;

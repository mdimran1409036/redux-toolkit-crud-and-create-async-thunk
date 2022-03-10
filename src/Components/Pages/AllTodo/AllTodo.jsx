import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../../redux/features/todo/todoSlice";
import Button from "../../Shared/Button/Button";
import Input from "../../Shared/Input/Input";
import Title from "../../Shared/Title/Title";
import SingleTodo from "./SingleTodo/SingleTodo";

const AllTodo = () => {
    const allTodo = useSelector((state) => state.todo.value);
    const users = useSelector((state) => state.users.users);
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    return (
        <div>
            <Title>CRUD application with redux</Title>
            <h4 className="text-center">Total user: {users.length}</h4>
            <h4 className="text-center">Total todos: {allTodo.length}</h4>
            <br />
            <div className="mx-auto space-x-2 flex justify-center items-center">
                <Input
                    type="text"
                    placeholder="Add to do"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                ></Input>
                <Button
                    bg="bg-red-200"
                    onClick={() => {
                        dispatch(
                            addTodo({
                                id: Math.floor(Math.random() * 100000000000),
                                name: todo,
                            })
                        );
                        setTodo("");
                    }}
                >
                    Add todo
                </Button>
            </div>
            <br />
            {allTodo.length > 0 &&
                allTodo.map((item, index) => (
                    <SingleTodo key={item.id} todo={item} index={index} />
                ))}
        </div>
    );
};

export default AllTodo;

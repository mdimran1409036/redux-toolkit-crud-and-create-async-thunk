import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center underline space-x-5">
                    <Link to="/" className="hover:text-green-700">
                        Card
                    </Link>
                    <Link to="/counterState" className="hover:text-green-700">
                        Counter with useState
                    </Link>
                    <Link to="/counterRedux" className="hover:text-green-700">
                        Counter with redux
                    </Link>
                    <Link to="/users" className="hover:text-green-700">
                        User List
                    </Link>
                    <Link to="/todo" className="hover:text-green-700">
                        Todo App
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Nav;

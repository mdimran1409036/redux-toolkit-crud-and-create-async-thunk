import React from "react";

const Button = ({ children, bg, ...rest }) => {
    return (
        <button
            {...rest}
            className={`${bg} rounded-lg hover:bg-gray-200 px-5 py-2`}
        >
            {children}
        </button>
    );
};

export default Button;

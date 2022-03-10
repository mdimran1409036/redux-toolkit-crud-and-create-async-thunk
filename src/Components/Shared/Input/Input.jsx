import React from "react";

const Input = ({ type, color = "text-black", ...rest }) => {
    return (
        <input
            type={type}
            {...rest}
            className={`outline-slate-400 bg-slate-100 border border-slate-400 p-2 rounded-lg ${color}`}
        />
    );
};

export default Input;

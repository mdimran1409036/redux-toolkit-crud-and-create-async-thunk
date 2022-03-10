import React from "react";

const Title = ({ children }) => {
    return (
        <h2 className="text-center my-5 text-red-500 text-lg font-semibold">
            {" "}
            {children}
        </h2>
    );
};

export default Title;

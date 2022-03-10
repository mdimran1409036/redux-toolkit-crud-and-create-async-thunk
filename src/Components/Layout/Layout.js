import React from "react";
import Nav from "../Shared/Nav/Nav";

const Layout = ({ children }) => {
    return (
        <>
            <Nav></Nav>
            {children}
        </>
    );
};

export default Layout;

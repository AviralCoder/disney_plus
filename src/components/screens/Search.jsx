import React, { useContext } from "react";
import { IsLoggedInContext } from "../../App";

import { Redirect } from "react-router-dom";

const Search = () => {
    const isLoggedIn = useContext(IsLoggedInContext);

    if (!isLoggedIn) return <Redirect to="/account" />;

    return (
        <>
            <h1 style={{ color: "white" }}>you are in the search screen</h1>
        </>
    );
};

export default Search;

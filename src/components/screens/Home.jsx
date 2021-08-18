import React, { useContext, useState } from "react";
import { IsLoggedInContext } from "../../App";

import Poster from "../Poster";
import { Redirect } from "react-router-dom";
import Companies from "../Companies";

const Home = () => {
    const isLoggedIn = useContext(IsLoggedInContext);

    if (!isLoggedIn) return <Redirect to="/" />;

    return (
        <>
            <Poster />

            <Companies />
        </>
    );
};

export default Home;

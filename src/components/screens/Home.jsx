import React, { useContext } from "react";
import { IsLoggedInContext } from "../../App";

import Carousel from "../Carousel";
import { Redirect } from "react-router-dom";

const Home = () => {
    const isLoggedIn = useContext(IsLoggedInContext);

    if (!isLoggedIn) return <Redirect to="/" />;

    return (
        <>
            <Carousel />
        </>
    );
};

export default Home;

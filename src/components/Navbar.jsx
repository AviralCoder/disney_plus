import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IsLoggedInContext, FnameContext, LnameContext } from "../App";

const Navbar = () => {
    const isLoggedIn = useContext(IsLoggedInContext);
    const fname = useContext(FnameContext);
    const lname = useContext(LnameContext);

    return (
        <header>
            <nav>
                <Link to="/search">
                    <p>Search</p>
                </Link>

                <Link to="/home">
                    <p>Home</p>
                </Link>

                <p className="useless">Originals</p>
                <p className="useless">Movies</p>
                <p className="useless">TV</p>
                <p className="useless">Kids</p>
                <p className="useless">Video library</p>
                <p className="useless">Watchlist</p>

                <Link to="/account">
                    <p>Account</p>
                </Link>
            </nav>

            {isLoggedIn ? (
                <Link to="/account">
                    <h1
                        className={"logo"}
                        style={{ textDecoration: "none" }}
                    >{`${fname.charAt(0).toUpperCase()}${lname
                        .charAt(0)
                        .toUpperCase()}`}</h1>
                </Link>
            ) : null}
        </header>
    );
};

export default Navbar;

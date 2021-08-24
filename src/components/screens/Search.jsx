import React, { useContext, useState } from "react";
import { IsLoggedInContext } from "../../App";
import Snack from "../Snack";
import { Redirect } from "react-router-dom";

const Search = () => {
    const isLoggedIn = useContext(IsLoggedInContext);
    const [searchValue, setSearchValue] = useState("");
    const [snackDisplayState, setSnackDisplayState] = useState("none");

    if (!isLoggedIn) return <Redirect to="/account" />;

    return (
        <>
            <div className="search-screen">
                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        window.open(
                            `https://www.hotstar.com/in/search?q=${searchValue}`,
                            "_blank",
                            "location=yes,height=570,width=520,scrollbars=yes,status=yes"
                        );
                        setSnackDisplayState("block");
                    }}
                >
                    Search
                </button>

                <Snack
                    text="Search results opening"
                    displayState={snackDisplayState}
                />
            </div>
        </>
    );
};

export default Search;

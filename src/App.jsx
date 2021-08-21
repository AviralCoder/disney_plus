import React, { useState, useEffect, useDebugValue } from "react";

// Component imports
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import Search from "./components/screens/Search";
import Default from "./components/screens/Default";
import Login from "./components/screens/Login";
import { recommendations, originals, newToDisney, hit } from "./data/data";

const IsLoggedInContext = React.createContext();
const SetIsLoggedInContent = React.createContext();
const FnameContext = React.createContext();
const LnameContext = React.createContext();
const PasswordContext = React.createContext();
const SetFnameContext = React.createContext();
const SetLnameContext = React.createContext();
const SetPasswordContext = React.createContext();

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [password, setPassword] = useState("");

    useDebugValue(isLoggedIn ? "Logged In" : "Logged out");

    useEffect(() => {
        try {
            document
                .getElementById("rf20872937298732heuhiuhdeiudheiudhued")
                .remove();
        } catch (e) {
            console.error(e);
        }
    }, []);

    return (
        <>
            <IsLoggedInContext.Provider value={isLoggedIn}>
                <SetIsLoggedInContent.Provider value={setIsLoggedIn}>
                    <FnameContext.Provider value={fName}>
                        <LnameContext.Provider value={lName}>
                            <PasswordContext.Provider value={password}>
                                <SetFnameContext.Provider value={setFName}>
                                    <SetLnameContext.Provider value={setLName}>
                                        <SetPasswordContext.Provider
                                            value={setPassword}
                                        >
                                            <Switch>
                                                <Route path="/" exact>
                                                    <Navbar />
                                                    <Default />
                                                </Route>

                                                <Route path="/home" exact>
                                                    <Navbar />
                                                    <Home />
                                                </Route>

                                                <Route path="/search" exact>
                                                    <Navbar />
                                                    <Search />
                                                </Route>

                                                <Route path="/account" exact>
                                                    <Navbar />
                                                    <Login />
                                                </Route>

                                                {recommendations.map((elem) => {
                                                    const urlMovie =
                                                        elem.name.replace(
                                                            / /g,
                                                            ""
                                                        );

                                                    return (
                                                        <Route
                                                            path={`/movies/${urlMovie}`}
                                                        >
                                                            <Navbar />
                                                            <h1
                                                                style={{
                                                                    color: "white",
                                                                }}
                                                            >
                                                                {elem.name}
                                                            </h1>
                                                        </Route>
                                                    );
                                                })}

                                                {originals.map((elem) => {
                                                    const urlMovie =
                                                        elem.name.replace(
                                                            / /g,
                                                            ""
                                                        );

                                                    return (
                                                        <Route
                                                            path={`/movies/${urlMovie}`}
                                                        >
                                                            <Navbar />
                                                            <h1
                                                                style={{
                                                                    color: "white",
                                                                }}
                                                            >
                                                                {elem.name}
                                                            </h1>
                                                        </Route>
                                                    );
                                                })}

                                                {newToDisney.map((elem) => {
                                                    const urlMovie =
                                                        elem.name.replace(
                                                            / /g,
                                                            ""
                                                        );

                                                    return (
                                                        <Route
                                                            path={`/movies/${urlMovie}`}
                                                        >
                                                            <Navbar />
                                                            <h1
                                                                style={{
                                                                    color: "white",
                                                                }}
                                                            >
                                                                {elem.name}
                                                            </h1>
                                                        </Route>
                                                    );
                                                })}

                                                {hit.map((elem) => {
                                                    const urlMovie =
                                                        elem.name.replace(
                                                            / /g,
                                                            ""
                                                        );

                                                    return (
                                                        <Route
                                                            path={`/movies/${urlMovie}`}
                                                        >
                                                            <Navbar />
                                                            <h1
                                                                style={{
                                                                    color: "white",
                                                                }}
                                                            >
                                                                {elem.name}
                                                            </h1>
                                                        </Route>
                                                    );
                                                })}
                                            </Switch>
                                        </SetPasswordContext.Provider>
                                    </SetLnameContext.Provider>
                                </SetFnameContext.Provider>
                            </PasswordContext.Provider>
                        </LnameContext.Provider>
                    </FnameContext.Provider>
                </SetIsLoggedInContent.Provider>
            </IsLoggedInContext.Provider>
        </>
    );
};

export default App;
export {
    IsLoggedInContext,
    SetIsLoggedInContent,
    FnameContext,
    LnameContext,
    PasswordContext,
    SetFnameContext,
    SetLnameContext,
    SetPasswordContext,
};

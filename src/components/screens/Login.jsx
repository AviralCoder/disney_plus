import React, { useContext, useState } from "react";
import {
    SetIsLoggedInContent,
    IsLoggedInContext,
    FnameContext,
    LnameContext,
    PasswordContext,
    SetFnameContext,
    SetLnameContext,
    SetPasswordContext,
} from "../../App";
import { Center } from "../Layout";
import Snack from "../Snack";

const Login = () => {
    const setIsLoggedInContext = useContext(SetIsLoggedInContent);
    const isLoggedInContext = useContext(IsLoggedInContext);
    const fName = useContext(FnameContext);
    const lName = useContext(LnameContext);
    const password = useContext(PasswordContext);
    const setFName = useContext(SetFnameContext);
    const setLName = useContext(SetLnameContext);
    const setPassword = useContext(SetPasswordContext);

    const [passwordText, setPasswordText] = useState(`Password: ...`);
    const [buttonText, setButtonText] = useState("Show Password");
    const [display, setDisplay] = useState("none");
    const [snackText, setSnackText] = useState("");

    const onLoginClick = () => {
        if (fName !== "" && lName !== "" && password !== "") {
            if (
                fName.length <= 2 ||
                lName.length <= 2 ||
                fName.length > 20 ||
                lName.length > 20
            ) {
                alert(
                    "The name cannot be 2 letters or less and has to be less than 20"
                );
            } else {
                if (password.length < 5) {
                    alert(
                        "The passwords length has to be greater than or equal to 5"
                    );
                } else {
                    setIsLoggedInContext(true);
                    setSnackText("Signed in");
                    setDisplay("block");
                    setTimeout(() => {
                        setDisplay("none");
                    }, 2500);
                }
            }
        } else {
            alert("Please fill all the fields");
        }
    };

    const detailsStyle = {
        color: "white",
    };

    return (
        <>
            <Center height={"90vh"}>
                {!isLoggedInContext ? (
                    <div className="login-container">
                        <h2
                            style={{
                                color: "white",
                                textAlign: "center",
                            }}
                        >
                            Login
                        </h2>
                        <input
                            type="text"
                            placeholder={"First Name"}
                            value={fName}
                            onChange={(e) => setFName(e.target.value)}
                        />
                        <br />
                        <input
                            type="text"
                            placeholder={"Last Name"}
                            value={lName}
                            onChange={(e) => setLName(e.target.value)}
                        />
                        <br />
                        <input
                            type="password"
                            placeholder={"Enter your password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={onLoginClick}>Sign in</button>
                    </div>
                ) : (
                    <div className="login-container">
                        <h1 style={{ color: "white" }}>You are logged in</h1>

                        <p style={detailsStyle}>{`First Name: ${fName}`}</p>
                        <p style={detailsStyle}>{`Last Name: ${lName}`}</p>
                        <p style={detailsStyle}>{passwordText}</p>
                        <button
                            onClick={() => {
                                if (buttonText === "Show Password") {
                                    setPasswordText(`Password: ${password}`);
                                    setButtonText("Hide Password");
                                } else if (buttonText === "Hide Password") {
                                    setPasswordText(`Password: ...`);
                                    setButtonText("Show Password");
                                }
                            }}
                        >
                            {buttonText}
                        </button>
                        <button
                            onClick={() => {
                                if (
                                    window.confirm(
                                        "Are you sure you want to log out?"
                                    )
                                )
                                    setIsLoggedInContext(false);
                                setSnackText("Logged out");
                                setDisplay("block");
                                setTimeout(() => {
                                    setDisplay("none");
                                }, 2500);
                            }}
                        >
                            Logout
                        </button>
                    </div>
                )}
            </Center>

            <Snack text={snackText} displayState={display} />
        </>
    );
};

export default Login;

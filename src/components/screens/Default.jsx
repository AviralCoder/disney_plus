import React from "react";

import { Link } from "react-router-dom";

const Default = () => {
    return (
        <>
            <div className="center">
                <div className="flexbox">
                    <div className="left">
                        <h1 style={{ textAlign: "center" }}>
                            Welcome to Disney+
                        </h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Ea, dolorem sapiente? Totam adipisci, ducimus
                            illum quasi eos beatae vel blanditiis quaerat
                            excepturi quis dolorum inventore numquam? Tenetur
                            dicta expedita ullam!
                        </p>

                        <Link to="/account">
                            <button>Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Default;

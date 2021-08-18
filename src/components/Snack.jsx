import React from "react";

const Snack = ({ text, displayState }) => {
    return (
        <div className="snack" style={{ display: displayState }}>
            <h3>{text}</h3>
        </div>
    );
};

export default Snack;

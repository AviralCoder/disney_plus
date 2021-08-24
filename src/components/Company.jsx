import React from "react";

const Company = ({ image, videoSrc }) => {
    return (
        <div className="company_">
            <img src={image} alt="" className={"company"} />
        </div>
    );
};

export default Company;

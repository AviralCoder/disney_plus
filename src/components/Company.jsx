import React, { useState } from "react";

import MarvelVideo from "../assets/videos/marvel.mp4";

const Company = ({ image, videoSrc }) => {
    return (
        <div className="company_">
            <img src={image} alt="" className={"company"} />
        </div>
    );
};

export default Company;

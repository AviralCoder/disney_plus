import React from "react";
import { Flexbox } from "./Layout";
import Company from "./Company";

//image imports
import Marvel from "../assets/images/marvel image.webp";
import Pixar from "../assets/images/pixar image.webp";
import Disney from "../assets/images/disney image.webp";
import StarWars from "../assets/images/star wars imaeg.webp";
import NationalGeographic from "../assets/images/national georgaphic.webp";

const Companies = () => {
    return (
        <div className="margin">
            <Flexbox>
                <Company image={Disney} />
                <Company image={Pixar} />
                <Company image={Marvel} />
                <Company image={StarWars} />
                <Company image={NationalGeographic} />
            </Flexbox>
        </div>
    );
};

export default Companies;

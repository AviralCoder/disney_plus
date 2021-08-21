import React from "react";

const Movie = ({ imgSrc, movieName }) => {
    return (
        <div className="movie">
            <img src={imgSrc} alt={movieName} style={{ width: 90 + "%" }} />
        </div>
    );
};

export default Movie;

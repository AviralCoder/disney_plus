import React, { useState, useContext } from "react";
import { Flexbox } from "./Layout";
import Snack from "./Snack";

export default function MovieScreen({ poster, name, genres, about, year }) {
    const [displayState, setDisplayState] = useState("none");

    let genres_array = [...genres];

    genres_array = genres_array.toLocaleString();

    return (
        <div className="movie_page">
            <Flexbox
                style={{
                    justifyContent: "space-around",
                    alignItems: "center",
                    height: "90vh",
                }}
            >
                <div className="left" style={{ width: "30%" }}>
                    <h1 style={{ color: "white" }}>{name}</h1>
                    <p style={{ color: "white" }}>{genres_array}</p>
                    <p style={{ color: "white", marginTop: 7 }}>{year}</p>
                    <p style={{ color: "white", marginTop: 10 }}>{about}</p>

                    <div style={{ marginTop: 13 }}>
                        <button className="movie-page-button">Watch</button>
                        <button className="movie-page-button">Trailer</button>
                        <button
                            className="movie-page-button"
                            onClick={() => {
                                setDisplayState("block");
                            }}
                        >
                            Add to Watchlist
                        </button>
                    </div>
                </div>

                <div className="right">
                    <img
                        src={poster}
                        alt={`${name}'s poster'`}
                        width="100%"
                        style={{ borderRadius: 10 }}
                    />
                </div>
            </Flexbox>

            <Snack text="Added to watchlist" displayState={displayState} />
        </div>
    );
}

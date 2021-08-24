import React from "react";
import { Flexbox } from "./Layout";

export default function MovieScreen({ poster, name }) {
    return (
        <div className="movie_page">
            <Flexbox
                style={{
                    justifyContent: "space-around",
                    alignItems: "center",
                    height: "90vh",
                }}
            >
                <div className="left">
                    <h1 style={{ color: "white" }}>{name}</h1>

                    <p></p>
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
        </div>
    );
}

import React, { useContext, useState } from "react";
import { IsLoggedInContext } from "../../App";

import Poster from "../Poster";
import { Redirect } from "react-router-dom";
import Companies from "../Companies";
import { Container } from "../Layout";
import { recommendations, originals, newToDisney, hit } from "../../data/data";
import Movie from "../Movie";
import { Grid } from "../Layout";

import { Link } from "react-router-dom";

const Home = () => {
    const isLoggedIn = useContext(IsLoggedInContext);

    if (!isLoggedIn) return <Redirect to="/" />;

    const sectionDivideTextStyles = {
        color: "white",
        marginTop: 30,
    };

    return (
        <>
            <Poster />

            <Companies />

            <Container>
                <p style={sectionDivideTextStyles}>Recommended for you</p>

                <Grid style={{ marginTop: 20, textAlign: "center" }}>
                    {recommendations.map((elem) => {
                        const urlMovie = elem.name.replace(/ /g, "");

                        return (
                            <Link to={`/movies/${urlMovie}`}>
                                <Movie
                                    imgSrc={elem.image}
                                    movieName={elem.name}
                                />
                            </Link>
                        );
                    })}
                </Grid>

                <p style={sectionDivideTextStyles}>Disney+ Originals</p>

                <Grid style={{ marginTop: 20, textAlign: "center" }}>
                    {originals.map((elem) => {
                        const urlMovie = elem.name.replace(/ /g, "");

                        return (
                            <Link to={`/movies/${urlMovie}`}>
                                <Movie
                                    imgSrc={elem.image}
                                    movieName={elem.name}
                                />
                            </Link>
                        );
                    })}
                </Grid>

                <p style={sectionDivideTextStyles}>New to disney+</p>

                <Grid style={{ marginTop: 20, textAlign: "center" }}>
                    {newToDisney.map((elem) => {
                        const urlMovie = elem.name.replace(/ /g, "");

                        return (
                            <Link to={`/movies/${urlMovie}`}>
                                <Movie
                                    imgSrc={elem.image}
                                    movieName={elem.name}
                                />
                            </Link>
                        );
                    })}
                </Grid>

                <p style={sectionDivideTextStyles}>Hit Movies</p>

                <Grid style={{ marginTop: 20, textAlign: "center" }}>
                    {hit.map((elem) => {
                        const urlMovie = elem.name.replace(/ /g, "");

                        return (
                            <Link to={`/movies/${urlMovie}`}>
                                <Movie
                                    imgSrc={elem.image}
                                    movieName={elem.name}
                                />
                            </Link>
                        );
                    })}
                </Grid>
            </Container>
        </>
    );
};

export default Home;

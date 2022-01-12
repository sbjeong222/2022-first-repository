import React from "react";
import propTypes from "prop-types";

function Movie({ id, title, year, sumamry, poster }) {
    return <h1>{title}</h1>;
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
};

export default Movie;

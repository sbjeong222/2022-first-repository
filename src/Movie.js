import React from "react";
import propTypes from "prop-types";

function Movie() {
    return <h1></h1>;
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    proster: propTypes.string.isRequired,
};

export default Movie;

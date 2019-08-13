import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MovieCard = styled.div`
    background-image: ${props => `url(${props.background})`};
    background-size: cover;
    background-position: center center;
    border-radius: 5px;
    height: 100%;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
    }
`;

const MovieInfo = styled.div`
    width: 100%;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Movie = ({ id, poster, title, rating }) => {
    return (
        <Link to={`/detail/${id}`}>
            <MovieCard background={poster}>
                <MovieInfo>
                    <span>{title}</span>
                    <span>{rating}</span>
                </MovieInfo>
            </MovieCard>
        </Link>
    );
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;

import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_MOVIE_DETAIL } from "./queries";
import { Card, Grid } from "./styled";
import styled from "styled-components";
import Movie from "./Movie";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "./Loader";

const CardInfo = styled.div`
    padding: 20px;
    font-size: 1rem;
    color: #555;
    font-weight: 400;
`;

const Title = styled.h1`
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
`;

const Paragraph = styled.p`
    line-height: 1.3;
    margin-top: 20px;
`;

const Badge = styled.span`
    font-size: 0.9rem;
    color: #333;
    background-color: #eee;
    border-radius: 5px;
    padding: 5px 10px;
    margin-right: 10px;
`;

const Detail = ({
    match: {
        params: { movie_id }
    }
}) => {
    const {
        loading,
        error,
        data: { movie, suggestions }
    } = useQuery(GET_MOVIE_DETAIL, {
        variables: { id: parseInt(movie_id) }
    });

    if (loading) return <Loader />;
    if (error) return <p>Error :(</p>;

    return (
        <Fragment>
            <Card>
                <img src={movie.medium_cover_image} alt={movie.title} />
                <CardInfo>
                    <Title>{movie.title}</Title>
                    <h4>
                        {movie.genres.map((genre, index) => (
                            <Badge key={index}>{genre}</Badge>
                        ))}
                        <FontAwesomeIcon icon={faStar} /> {movie.rating}
                    </h4>
                    <Paragraph>{movie.description_intro}</Paragraph>
                </CardInfo>
            </Card>
            <br />
            <h3>Suggestions :</h3>
            <Grid column={4}>
                {suggestions.map(movie => (
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        poster={movie.medium_cover_image}
                        title={movie.title}
                        rating={movie.rating}
                    />
                ))}
            </Grid>
        </Fragment>
    );
};

export default Detail;

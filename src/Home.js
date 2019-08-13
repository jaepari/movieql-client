import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_MOVIES } from "./queries";
import Movie from "./Movie";
import { Grid } from "./styled";
import Loader from "./Loader";

const Home = props => {
    const {
        loading,
        error,
        data: { movies }
    } = useQuery(GET_MOVIES);

    if (loading) return <Loader />;
    if (error) return <p>Error :(</p>;

    return (
        <Grid column={4}>
            {movies.map(movie => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    poster={movie.medium_cover_image}
                    title={movie.title}
                    rating={movie.rating}
                />
            ))}
        </Grid>
    );
};

export default Home;

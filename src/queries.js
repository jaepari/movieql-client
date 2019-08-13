import { gql } from "apollo-boost";

export const GET_MOVIES = gql`
    {
        movies(limit: 50, rating: 8) {
            id
            title
            rating
            medium_cover_image
        }
    }
`;

export const GET_MOVIE_DETAIL = gql`
    query Get_movie_detail($id: Int!) {
        movie(id: $id) {
            id
            title
            rating
            description_intro
            medium_cover_image
            genres
        }
        suggestions(id: $id) {
            id
            medium_cover_image
            title
            rating
        }
    }
`;

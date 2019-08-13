import styled from "styled-components";

const boxShadow =
    "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)";

export const Container = styled.div`
    max-width: 950px;
    margin: 0 auto;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: ${props => `repeat(${props.column}, 1fr)`};
    grid-auto-rows: minmax(300px, auto);
    justify-content: center;
    grid-gap: 30px;
`;

export const Card = styled.div`
    border-radius: 5px;
    background-color: white;
    box-shadow: ${boxShadow};
    display: flex;
    justify-content: space-between;
    overflow: hidden;
`;

export const Header = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    text-decoration: none;
`;

import React from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
`;

const Loader = () => {
    return (
        <LoaderContainer>
            <FontAwesomeIcon icon={faSpinner} size="4x" spin />
        </LoaderContainer>
    );
};

export default Loader;

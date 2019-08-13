import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apolloClient";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import "./App.css";
import { Container, Header } from "./styled";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Container>
                    <Header>
                        <Link to="/">
                            <FontAwesomeIcon icon={faVideo} /> Graphql Movies
                        </Link>
                    </Header>
                    <Route exact path="/" component={Home} />
                    <Route path="/detail/:movie_id" component={Detail} />
                </Container>
            </Router>
        </ApolloProvider>
    );
}

export default App;

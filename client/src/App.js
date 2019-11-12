import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/index.js";
import Jumbotron from "./components/jumbotron";
import { Col, Row, Container } from "./components/grid";
import BookSearch from "./components/bookSearch";


class App extends Component {
  render() {
    return (
      <Container>
      <Navbar/>
      <Jumbotron><h1>(REACT) GOOGLE BOOK SEARCHER!</h1></Jumbotron>
      <BookSearch/>
      </Container>
      
    );
  }
}

export default App;

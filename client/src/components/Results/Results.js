import React, { Component } from "react";
import { Col, Row, Container } from "./components/grid";
import "./style.css";
import BookSearch from "../BookSearch";


class Results extends Component {

  constructor(props){
    super(props)
    this.state = {books: [],
    searchField: ''
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({})
    };

  render() {
    return (
      <BookSearch/>

    );
  }
}

export default Books;

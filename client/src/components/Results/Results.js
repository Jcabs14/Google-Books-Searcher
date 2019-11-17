import React, { Component } from "react";
import "./style.css";
import BookSearch from "../BookSearch";
import axios from "axios";

class Results extends Component {

  constructor(props) {
    super(props)
    this.state = {
      books: [],
      searchField: '',
      bookInfo: ''
    }
  };

  handleBookSearch = event => {
    event.preventDefault();
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}`).then(res => this.setState({bookInfo: res.data}));
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ searchField: event.target.value })
  };

  render() {
    return (
      <BookSearch handleBookSearch={this.handleBookSearch} handleFormSubmit={this.handleFormSubmit} />
    );
  }
}

export default Results;

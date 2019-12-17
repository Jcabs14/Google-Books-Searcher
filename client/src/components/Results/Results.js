import React, { Component } from "react";
import "./style.css";
import BookSearch from "../BookSearch";
import axios from "axios";
import BookList from "../BookList";
import BookCard from "../BookCard";
import { join } from "path";

class Results extends Component {

  constructor(props) {
    super(props)
    this.state = {
      books: [],
      searchField: '',
    }
  };

  handleBookSearch = event => {
    event.preventDefault();
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}`).then(res => 
    this.setState({
      books: res.data.items
    }));
  }


  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ searchField: event.target.value })
  };

  render() {
    return (
      <div>
        <BookSearch handleBookSearch={this.handleBookSearch} handleFormSubmit={this.handleFormSubmit} />
        {this.state.books ? 
          this.state.books.map(book => (
          <BookCard
            id={book.id}
            key={book.id}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors + join(",")}
            description={book.volumeInfo.description}
            link={book.volumeInfo.infoLink}
          />
        ))
        :<p>
          "Please Search a book"
        </p>
        }
      </div>
    );
  }
}

export default Results;

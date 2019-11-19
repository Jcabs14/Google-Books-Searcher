import React from "react";
import BookCard from "../BookCard/";

const BookList = (props) => {
    return(
        <div className="list">
            {
                props.books.map((book) => {
                    return <BookCard
                    key = {book.volumeInfo.id}
                    image ={book.volumeInfo.imageLinks.thumbnail}
                    title ={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.link}
                    />
                })
            }
        </div>
    )
}

export default BookList;
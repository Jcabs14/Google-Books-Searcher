import React from "react";
import BookCard from "../BookCard/";

const BookList = (props) => {
    return(
        <div className="list">
            {
                props.books.map((book,i) => {
                    return <BookCard
                    image ={book.volumnInfo.imageLinks.thumbnail}
                    title ={book.title}
                    authors={book.authors}
                    description={book.description}
                    link={book.link}


                    />
                })
            }
        </div>
    )
}

export default BookList;
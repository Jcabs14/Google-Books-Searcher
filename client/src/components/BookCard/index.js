import React from "react";

const BookCard = (props) => {
    return (
        <div className="card-container">
            <img src={props.image} />
            <h2>{props.title}</h2>
            <h3>{props.authors}</h3>
            <p>{props.description}</p>
            <p>{props.link}</p>
        </div>
    )
}

export default BookCard;
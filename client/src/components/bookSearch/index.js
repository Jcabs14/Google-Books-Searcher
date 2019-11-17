import React from "react"
import "./style.css"

const bookSearch = (props) => {
    return (
        <div className="book-Search">
            <p className="space">Book Search</p>
            <form onSubmit={props.handleBookSearch}>
                <label className="space">
                    Name of book:
    <input type="text" name="name"  onChange={props.handleFormSubmit} className="textInput" />
                </label>
                <input type="submit" value="Submit"/>
            </form>

        </div>
    );
}

export default bookSearch;
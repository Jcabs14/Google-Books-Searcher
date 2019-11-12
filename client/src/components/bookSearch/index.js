import React from "react"
import "./style.css"

function bookSearch() {
    return (
        <div className="bookSearchContainer">
            <p className="space">Book Search</p>
            <form>
                <label className="space">
                    Name of book:
    <input type="text" name="name" className="textInput" />
                </label>
                <input type="submit" value="Submit"/>
            </form>

        </div>
    );
}

export default bookSearch;
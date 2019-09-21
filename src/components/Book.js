import React from 'react';

const Book = ({ book, shelf, title, authors, thumb, moveBook }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${thumb})`
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            value={shelf || 'none'} //if you have a shelf ID use it
            onChange={e => moveBook(book, e.target.value)}
          >
            <option disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

export default Book;

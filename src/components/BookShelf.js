import React from 'react';
import Book from './Book';

const BookShelf = ({ name, books, moveBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <Book
                thumb={
                  book.imageLinks
                    ? book.imageLinks.thumbnail
                    : `http://via.placeholder.com/128x193?text=No%20Cover`
                }
                title={book.title}
                authors={book.authors}
                shelf={book.shelf}
                moveBook={moveBook}
                book={book}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;

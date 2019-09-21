import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

const ShelvesPage = ({ books, book, shelf, moveBook }) => {
  /* Takes a custom shelf name and returns only the books
   from the specific shelf from the API: see BooksShelves below*/
  const filterShelves = shelf => {
    return books.filter(book => book.shelf === shelf);
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf
          name="Currently Reading"
          books={filterShelves('currentlyReading')} //<--custom shelf name
          book={book}
          moveBook={moveBook}
          shelf={shelf}
        />

        <BookShelf
          name="Want to Read"
          books={filterShelves('wantToRead')} //<--custom shelf name
          book={book}
          moveBook={moveBook}
          shelf={shelf}
        />

        <BookShelf
          name="Finished Reading"
          books={filterShelves('read')} //<--custom shelf name
          book={book}
          moveBook={moveBook}
          shelf={shelf}
        />
      </div>

      <div className="open-search">
        <Link to={`${process.env.PUBLIC_URL}/BookFinder`}>Add a book</Link>
      </div>
    </div>
  );
};

export default ShelvesPage;

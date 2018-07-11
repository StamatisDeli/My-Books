# MyReads Project

    This is a book library app. It features 3 shelves for books currently reading, want to read, and already read. The user can search and add books to the desired shelf, and switch shelves if they like.

## How to run this app:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting - Developer info
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).


## My Journal

This is a record of the process of making this project

Day One: I am trying to learn as much as I can, so I get an idea where to start.
Day Two: 
I figured I am calling the books with BooksAPI.
I realized I have to break my components to tiny pieces, and use the given code in them.

        So I made:
        Book.js to use for all the books. Put some code in.
        BookFinder.js for searching books.
        Shelf.js not sure I'll use that
        ShelvesPage.js pasted some code in.
        MoveTo.js is the menu for assorting books. That is deleted.
            I exported them all and declared them all into each other.
            No real code yet lol.
            
- I installed prop-types and react-router-dom. I don't think I will need them.

I still don't know what to do exactly, but:
    I will move the app.js  code to another file, and work my way adding a thing at a time.

Finally getting somewhere. I used Browser Router to make the links. Before that I used State. cool.Switching between states switches screens. I struggled a bit but goot it right.

- Next is get the data from the database.
    I did it. I managed loop through the data an make the whole list appear. Needs tuning, but works.

- Now to filter alphabetical results.
    I managed to get some functionality, it returns books, I must make it work correctly.
    It's working, needs tuning.

I managed to pull shelf name from the API and pass it to the shelves.

        Tricky:
        using .filter returns the whole item from the array, while .map returns only the specific key values!!!!

After struggling with a typo a whole day, my classmate Alain pointed out the mistake and I finally made the dropdown menu working (firing event). My mentor Kelly helped fix some stuff, like adding the correct props to Book, which where absent or incosistent.

-How will I handle query errors?
    If there is nothing written, error.
    I managed to do it. I saw someone use .error in turnary. I will try to learn more. As it turns out, some thumbnails are missing from the api. Needs fixing
        Done: thumb={book.imageLinks?book.imageLinks.thumbnail:!book.imageLinks?null:null} for all Book props. Mentor Kelly suggested a more optimized similar solution, and I did that.

-Last issue: Books know their shelf only if browser is refreshed, or I switch to ShelvesPage.

    I loop though search results (in BookFinder) and if a book matches a book in a shelf, I pass it that shelf. But that's not enough, 'cause the Books in BookFinder obviously are not aware of that change.
    I had to loop through the state books again in moveBook (in App) and compare their IDs to the book coming from search, and setState again with that. One would expect that the book updates its shelf the first time it is processed through update().


All done - It took me about 2 weeks.
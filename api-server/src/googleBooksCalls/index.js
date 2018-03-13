const books = require('google-books-search')

// https://www.npmjs.com/package/google-books-search


// ///////  GENERAL SEARCH BY TITLE, WRITER, ISBN...  //////

books.search('señor de los anillos', 
 (error, results) => {
    if (!error) {
        console.log(results)
    } else {
        console.log(error)
    }
}) 




// /////// RETRIEVE A PARTICULAR BOOK  //////

/* books.lookup('uRfHAQAACAAJ',  (error, result) => {
    if (!error) {
        console.log(result)
    } else {
        console.log(error)
    }
}) */


/////// ADVANCED SEARCHES  /////////////

const options = {
//	Your Google API key (Optional)
    // key: "YOUR API KEY", 
// Search in a specified field (title, author, publisher, subject or isbn) (Optional)
    field: 'title',
// The position in the collection at which to start the list of results (Default: 0)
    // offset: 0,
// The maximum number of results to return (Max 40) (Defult: 10)
    limit: 40,
// Restrict results to books or magazines (Default: all)
    type: 'books',
// Order results by relevance or newest (Default: relevance)
    order: 'relevance',
// Restrict results to a specified language (two-letter ISO-639-1 code) (Default: en)
    lang: 'es'
};

/* books.search("dune", options, (error, results, apiResponse) => {
    if (!error) {
        console.log(results)
    } else {
        console.log(error)
    }
}) */
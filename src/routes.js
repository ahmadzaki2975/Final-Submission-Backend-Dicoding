const {
  getAllBooksHandler,
  postNewBookHandler,
  getBookDetailsById,
} = require("./handler");

const routes = [
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    method: "POST",
    path: "/books",
    handler: postNewBookHandler,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookDetailsById,
  },
];

module.exports = routes;

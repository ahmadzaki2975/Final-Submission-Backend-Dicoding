const {
  getAllBooksHandler,
  postNewBookHandler,
  getBookDetailsByIdHandler,
  putBookByIdHandler,
  deleteBookByIdHandler
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
    handler: getBookDetailsByIdHandler,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: putBookByIdHandler,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookByIdHandler,
  }
];

module.exports = routes;

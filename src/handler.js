const books = require("./books");
const { nanoid } = require("nanoid");

//? Get all books
const getAllBooksHandler = (request, h) => {
  const dataToBeSent = books.map((book) => {
    return {
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    };
  });
  const response = h.response({
    status: "success",
    data: {
      books: dataToBeSent,
    },
  });
  return response;
};

//? Post a book with complete data
const postNewBookHandler = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;
  if (name === "" || name === undefined) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambahkan buku. Mohon isi nama buku",
    });
    response.statusCode = 400;
    return response;
  }
  if (readPage > pageCount) {
    const response = h.response({
      status: "fail",
      message:
        "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
    });
    response.statusCode = 400;
    return response;
  }
  const newBook = {
    id: nanoid(),
    finished: pageCount == readPage ? true : false,
    reading: reading,
    insertedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name,
    year,
    author,
    summary,
    publisher,
    readPage,
    pageCount,
  };
  books.push(newBook);
  const response = h.response({
    status: "success",
    message: "Buku berhasil ditambahkan",
    data: {
      bookId: newBook.id,
    },
  });
  response.statusCode = 201;
  return response;
};

//? Get book details
const getBookDetailsById = (request, h) => {
  const { bookId } = request.params;
  const index = books.findIndex((book) => {
    return book.id === bookId;
  });
  if (index == -1) {
    const response = h.response({
      status: "fail",
      message: "Buku tidak ditemukan",
    });
    response.statusCode = 404;
    return response;
  }
  const response = h.response({
    status: "success",
    data: {
      book: books[index],
    },
  });
  response.statusCode = 200;
  return response;
};

module.exports = { getAllBooksHandler, postNewBookHandler, getBookDetailsById };

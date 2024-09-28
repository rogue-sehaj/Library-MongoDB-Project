# Library MongoDB Project

This project is a library management system built using [MongoDB](https://www.mongodb.com/). It allows users to manage books, authors, and borrowers, providing functionalities to add, update, delete, and query data.

## Features

- Add, update, delete, and query books
- Manage authors and borrowers
- Efficient data handling with MongoDB

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (v4.4 or higher)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/roguesehaj/Library-MongoDB-Project.git
    cd Library-MongoDB-Project
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up your MongoDB database and update the connection string in the `config.js` file:

    ```javascript
    module.exports = {
        mongoURI: 'your-mongodb-connection-string'
    };
    ```

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. The server will start on `http://localhost:3000`. You can use tools like Postman to interact with the API.

## API Endpoints

### Books

- `GET /api/books` - Get all books
- `POST /api/books` - Add a new book
- `GET /api/books/:id` - Get a book by ID
- `PUT /api/books/:id` - Update a book by ID
- `DELETE /api/books/:id` - Delete a book by ID

### Authors

- `GET /api/authors` - Get all authors
- `POST /api/authors` - Add a new author
- `GET /api/authors/:id` - Get an author by ID
- `PUT /api/authors/:id` - Update an author by ID
- `DELETE /api/authors/:id` - Delete an author by ID

### Borrowers

- `GET /api/borrowers` - Get all borrowers
- `POST /api/borrowers` - Add a new borrower
- `GET /api/borrowers/:id` - Get a borrower by ID
- `PUT /api/borrowers/:id` - Update a borrower by ID
- `DELETE /api/borrowers/:id` - Delete a borrower by ID

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)


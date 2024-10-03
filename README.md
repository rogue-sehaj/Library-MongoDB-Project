# Library MongoDB Project

This project is a library management system built using [MongoDB](https://www.mongodb.com/). It allows users to manage books, authors, and borrowers, providing functionalities to add, delete, and query data.

## Features

- Add, delete, and query books
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

3. Add your MongoDB connection string to the `.env` file:

    ```env
    MONGODB_URI=your-mongodb-connection-string
    ```

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. The server will start on `http://localhost:6969`. You can use tools like [Postman](https://www.postman.com/) to interact with the API.

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## Acknowledgements

- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

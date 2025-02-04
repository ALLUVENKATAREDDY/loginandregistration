# Sign-Up and Login Page with Form Validation

This project is a simple Sign-Up and Login system built using React.js, Node.js, and MySQL. It includes form validation for user authentication.

## Technologies Used

- **Frontend**: React.js, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **API Client**: Axios

## Features

- User Sign-Up with form validation
- User Login with authentication
- Validation errors displayed for incorrect input
- MySQL database integration
- API endpoints for user registration and login

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- MySQL

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/signup-login-app.git
   cd signup-login-app
   ```

2. Install dependencies for frontend and backend:

   ```sh
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. Set up the MySQL database:

   - Create a database named `signup1`.
   - Create a table `login` with the following columns:
     ```sql
     CREATE TABLE login (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(255),
         email VARCHAR(255) UNIQUE,
         password VARCHAR(255)
     );
     ```

4. Configure database connection in `backend/index.js`:

   ```javascript
   const db = mysql.createConnection({
       host: "localhost",
       user: "root",
       password: "",
       database: "signup1"
   });
   ```

### Running the Application

#### Start the backend server:

```sh
cd backend
node index.js
```

#### Start the frontend React application:

```sh
cd frontend
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## API Endpoints

### **Sign-Up**

- **Method**: `POST`
- **URL**: `/signup`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

### **Login**

- **Method**: `POST`
- **URL**: `/login`
- **Request Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  - `"SUCCESS"` if login is successful
  - `"FAILED"` if the credentials are incorrect

## Folder Structure

```
/signup-login-app
  ├── frontend/     # React.js frontend
  │   ├── src/
  │   │   ├── components/
  │   │   │   ├── Login.js
  │   │   │   ├── SignUp.js
  │   │   ├── App.js
  │   │   ├── index.js
  │   ├── package.json
  │   ├── public/
  ├── backend/     # Node.js backend
  │   ├── index.js
  │   ├── package.json
  ├── README.md
```



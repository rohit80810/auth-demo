# Auth Demo (Node.js + Express + MongoDB)

This project demonstrates a basic **authentication flow** in Node.js using **Express, MongoDB, JWT, and bcrypt**.

---

## 🚀 Features
- User **registration** with hashed passwords (`bcrypt`)
- User **login** with JWT authentication (`jsonwebtoken`)
- **Change password** for logged-in users
- Secure handling of environment variables (`dotenv`)
- MongoDB connection using **Mongoose**
- File uploads support (`multer`) and Cloudinary integration (optional)

---

## 📦 Tech Stack
- **Node.js** + **Express** → Backend framework
- **MongoDB** + **Mongoose** → Database
- **JWT (jsonwebtoken)** → Authentication
- **bcrypt** → Password hashing
- **dotenv** → Environment variables
- **multer** → File uploads
- **cloudinary** → Media storage (optional)

---

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/auth-demo.git
   cd auth-demo
   npm install
   npm run dev

**Authentication Flow**

1. Register User

Endpoint: POST /api/auth/register

Request Body:

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "secret123",
  "role": "user"
}


Response:

{
  "success": true,
  "message": "User registered successfully"
}

2. Login User

Endpoint: POST /api/auth/login

Request Body:

{
  "email": "john@example.com",
  "password": "secret123"
}


Response:

{
  "success": true,
  "message": "Login successful",
  "token": "jwt_token_here"
}

3. Change Password

Endpoint: PUT /api/auth/change-password

Headers:
Authorization: Bearer <jwt_token>

Request Body:

{
  "oldPassword": "secret123",
  "newPassword": "newSecret456"
}


Response:

{
  "success": true,
  "message": "Password changed successfully"
}

# Block-App
implementation for block app using nodejs with mongodb 
# 🧱 Block App

A full-featured backend application built with **Node.js** and **Express.js**, designed to manage users, posts, comments, and authentication. The app uses **MongoDB** as the primary database and implements full **validation**, **authentication**, and **RESTful API** design.

---

## 🚀 Technologies Used

| Technology          | Purpose                              |
|---------------------|---------------------------------------|
| **Node.js**         | Backend runtime                       |
| **Express.js**      | Web framework                         |
| **MongoDB**         | NoSQL database                        |
| **MongoDB Compass** | GUI for MongoDB                       |
| **Mongoose**        | MongoDB ODM                           |
| **Postman**         | API testing tool                      |
| **VS Code**         | Code editor                           |
| **Joi / Yup**       | Input validation                      |
| **bcryptjs**        | Password hashing                      |
| **jsonwebtoken**    | User authentication                   |
| **dotenv**          | Manage environment variables          |
| **Nodemon**         | Development auto-reloader             |
| **CORS & Helmet**   | Security and cross-origin handling    |

---

## 📦 Features

- ✅ User registration & login (authentication)
- ✅ Password encryption using bcrypt
- ✅ JWT-based secure route protection
- ✅ CRUD operations for:
  - Users
  - Posts
  - Comments
- ✅ Data validation using Joi
- ✅ Clean project structure
- ✅ API tested with Postman
- ✅ MongoDB integration using Mongoose
- ✅ Error handling middleware

---

## 🛠 Installation

```bash
# Clone the repository
git clone https://github.com/YourUsername/Block-App.git

# Navigate into the directory
cd Block-App

# Install dependencies
npm install

Configuration
Create a .env file in the root directory with the following:

env
Copy
Edit
PORT=3000
MONGODB_URI=mongodb://localhost:27017/blockapp
JWT_SECRET=your_jwt_secret_key
🧪 Running the App
bash
Copy
Edit
# Start in development mode
npm run dev

# Or start in production
npm start
🔐 Authentication
Register: POST /api/auth/register

Login: POST /api/auth/login

Auth middleware protects routes using JWT.

📬 API Endpoints Overview
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user & get token
GET	/api/users	Get all users
POST	/api/posts	Create a post
GET	/api/posts/:id	Get post by ID
POST	/api/comments	Add a comment to a post

More endpoints are available for update/delete functionality.

📂 Folder Structure
bash
Copy
Edit
Block-App/
│
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── validators/
├── .env
├── .gitignore
├── package.json
├── README.md
🧪 Postman Collection
All endpoints are tested via Postman. You can import a collection or use Postman manually to test registration, login, and CRUD operations.

🤝 Contribution
Feel free to fork, submit issues, and contribute improvements!

📄 License
MIT License © 2025 [Your Name]

yaml
Copy
Edit

---

Let me know if you'd like me to generate a `README.md` file or postman collection file directly.

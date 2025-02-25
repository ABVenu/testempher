

# 📚 Mini LMS (Learning Management System)

A **Mini Learning Management System (LMS)** that allows users to manage courses, enrollments, and track learning progress.  

## 🚀 Features

- **User Authentication** (Signup, Login with JWT)
- **Role-based Access** (Admin, Instructor, Student)
- **Course Management** (Create, Update, Delete, View Courses)
- **Enrollment System** (Students can enroll in courses)
- **Progress Tracking** (Track completed lessons)
- **Secure API** (Protected routes using JWT)

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT, bcrypt
- **API Documentation:** Swagger
- **Database ORM:** Mongoose

---

## 📌 Installation

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/yourusername/mini-lms.git
cd mini-lms
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

### 3️⃣ Set Up Environment Variables  

Create a `.env` file in the root directory and add:  
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the Server  
```sh
npm start
```
The server will start at **http://localhost:5000**  

---

## 🔗 API Endpoints  

### **Authentication**
- **POST** `/users/signup` – Register a new user  
- **POST** `/users/login` – Authenticate user and return token  

### **Course Management**  
- **GET** `/courses` – Get all courses  
- **POST** `/courses` – Create a new course *(Admin Only)*  
- **PUT** `/courses/:id` – Update a course *(Admin Only)*  
- **DELETE** `/courses/:id` – Delete a course *(Admin Only)*  

### **Enrollment**  
- **POST** `/enroll` – Enroll in a course  
- **GET** `/enrollments` – Get user enrollments  

📄 **Full API Docs available at**: [`http://localhost:5000/api-docs`](http://localhost:5000/api-docs)  

---

## 🏗️ Folder Structure  

```
mini-lms/
│── models/           # Mongoose models
│── routes/           # Express routes
│── controllers/      # Route logic
│── middleware/       # Authentication & Authorization
│── config/           # Database & Server Config
│── .env              # Environment variables
│── server.js         # Main server file
│── README.md         # Project Documentation
```

---

## 🛠️ Future Enhancements
- Course **Quizzes & Assignments**
- Instructor Dashboard  
- Student **Progress Reports**
- Video **Lesson Streaming**

---

## 💡 Contributing  

1. **Fork** the repository  
2. Create a **feature branch**  
3. **Commit** your changes  
4. **Push** to your branch  
5. Submit a **Pull Request**  

---


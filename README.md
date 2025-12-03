📘 Developer Directory App

A full-stack web application for managing developer profiles with filtering, validation, CRUD operations, and a clean responsive UI.

✅ Live Demo

(You will add these after deployment)

Frontend: https://your-frontend-url.vercel.app
Backend:  https://your-backend-url.onrender.com

🚀 Features
✔ Add Developer

Name

Role (Frontend / Backend / Full-Stack)

Tech stack (comma-separated)

Experience (years)

✔ View Developers

Display in Material-UI table

Responsive UI

Auto refresh list

✔ Filter Developers

Search by name

Search by tech stack

Filter by role dropdown

✔ Delete Developer

Removes developer from DB

Reflects instantly in UI

✔ Form Validation

Backend: Bean Validation (Java)

Frontend: Required fields + error toast

✔ Toast Notifications

Success

Error

Validation errors

🛠️ Tech Stack
Frontend

React.js

Material-UI (MUI)

Axios

CSS Animations

Responsive Design

Backend

Spring Boot

Java 17

MongoDB Atlas

REST APIs

Validation with javax.validation

Database

MongoDB Atlas

Collection: Developers

Automatic ObjectId handling

📁 Project Structure
DeveloperAPI/
├── backend/
│   ├── src/main/java/com/developer/DeveloperAPI/
│   ├── pom.xml
│   └── application.properties
└── frontend/
    └── developer_directory/
        ├── src/
        ├── public/
        └── package.json

🧩 API Endpoints
➤ GET /api/developers

Returns all developers.

Response:
[
  {
    "id": "676dcab39b91...",
    "name": "John Doe",
    "role": "Full-Stack",
    "techStack": "React, Node",
    "experience": 2
  }
]

➤ POST /api/developers

Add a developer.

Request:
{
  "name": "Asif Khan",
  "role": "Backend",
  "techStack": "Java, Spring Boot",
  "experience": 1
}

➤ DELETE /api/developers/{id}

Deletes a developer by ID.

⚙️ Backend Setup (Spring Boot)
1️⃣ Navigate to backend folder
cd backend/DeveloperAPI

2️⃣ Run the app
mvn spring-boot:run

3️⃣ Backend runs at:
http://localhost:8080/api/developers

🎨 Frontend Setup (React + MUI)
1️⃣ Navigate to frontend
cd frontend/developer_directory

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm start

Frontend runs at:
http://localhost:3000

🌐 Deployment
1️⃣ Backend → Render (recommended)

Connect GitHub

Build Command:

./mvnw clean package -DskipTests


Start Command:

java -jar target/DeveloperAPI-0.0.1-SNAPSHOT.jar

2️⃣ Frontend → Vercel

Push frontend to GitHub

Import repo to Vercel

Build output: /build

3️⃣ Update Frontend API URL

In /src/api.js:

export default axios.create({
  baseURL: "https://your-backend.onrender.com/api/developers"
});



✨ Future Enhancements

Update developer details

Pagination

JWT authentication

Sorting by experience

Dark/Light theme (MUI theme provider)

Export list as PDF/Excel

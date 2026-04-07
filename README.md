<div align="center">
  <h1>🚀 Eduventure</h1>
  <p><strong>A Gamified Learning Platform for the Future of Education</strong></p>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18.x-green.svg" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-4.x-lightgrey.svg" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-Atlas-success.svg" alt="MongoDB">
  <img src="https://img.shields.io/badge/OpenAI-GPT_3.5-blue.svg" alt="OpenAI API">
</p>

---

## 📖 Overview

**Eduventure** is an interactive, full-stack educational platform designed to make learning engaging and fun. It transforms the traditional student experience by implementing core gamification mechanics—Adventure Points, skill testing quizzes, educational games, and AI-powered tutoring—accessible in bilingual modes (English and Odia) to cater to diverse student bases.

## ✨ Key Features

- **Gamified Student Dashboard**: Track your grade, adventure points, and subject mastery. 
- **Teacher Tools**: Empower educators with a dedicated portal to manage students, monitor class statistics, and seamlessly create or edit custom quizzes.
- **Sikshya Sahayak (AI Tutor)**: Integrated with OpenAI's GPT models to provide 24/7 intelligent answers to students' questions.
- **Dynamic Quizzes**: Real-time evaluation of quizzes, automatically factoring correct answers into a student's permanent "Adventure Points" history.
- **Games Hub**: Interactive, educational mini-games such as *Math Sprint*, *Memory Game*, and *Typing Speed Test*.
- **Live Leaderboard**: Motivates students through competitive, rank-based point systems.
- **Bilingual Interface**: One-click toggle between English and Odia.
- **Secure Authentication**: Session-based passport.js authentication securely backed by MongoDB Atlas.

---

## 🛠️ Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Frontend Engine**: EJS (Embedded JavaScript)
- **Styling**: Tailwind CSS (Utility-first CSS framework), Custom Vanilla CSS
- **Authentication**: Passport.js with bcrypt password hashing
- **AI Integration**: OpenAI SDK

---

## 🚀 Getting Started

### Prerequisites
Make sure you have installed on your local machine:
- [Node.js](https://nodejs.org/en/) (v16.x or strictly higher)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) URI (or local MongoDB database)
- An [OpenAI API Key](https://platform.openai.com/api-keys) for the tutor bot

### 1. Clone the Repository
```bash
git clone https://github.com/Prashant-Mathwale/Eduventure.git
cd Eduventure
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a file named `.env` in the root of your project directory and configure the following variables:
```env
# Database configuration
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.yourcluster.mongodb.net/eduventure?retryWrites=true&w=majority

# AI features
OPENAI_API_KEY=your_openai_api_key_here
```

### 4. Run the Server
```bash
npm start
```
The application will spin up at [http://localhost:3000](http://localhost:3000).

---

## 👩‍🏫 Demo Accounts

You can test the system locally using these freshly generated profiles (if migrating mock data) or register new identities straight directly from the portal:

**Teacher Account:**
- **Username**: `mr.singh`
- **Password**: `teacher123`

**Student Account:**
- **Username**: `arjun`
- **Password**: `student123`

---

<div align="center">
  <p>Built for the <strong>Smart India Hackathon (SIH)</strong></p>
</div>

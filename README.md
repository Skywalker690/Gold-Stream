# Gold Stream 🎜️

**Gold Stream** is a modern **Full Stack Movie Discovery Platform** featuring trailers, reviews, and watchlists with a cinematic UI.
Built with **React**, **Spring Boot**, **MongoDB**, and **Tailwind CSS**, it delivers a seamless movie browsing experience with robust backend services.

---

## 🚀 Features

* 🎥 **Watch Trailers** – Stream movie trailers seamlessly
* 📝 **Reviews** – Read & post reviews with a clean UI
* 📋 **Watchlist** – Save movies to your personal list
* ⚡ **Responsive UI** – Optimized for all devices
* 🌈 **Tailwind CSS Integration** – Utility-first custom styling with animations
* 💃 **Fallback & Loading States** – Smooth user experience

---

## 🚧 Tech Stack

* **Frontend:** React, React Router DOM, Tailwind CSS, Bootstrap, MUI
* **Icons:** FontAwesome, MUI Icons
* **HTTP Client:** Axios
* **Backend:** Spring Boot (Java)
* **Database:** MongoDB

---

## 📁 Folder Structure

```
/frontend/src
|-- components
|   |-- Hero
|   |-- Trailer
|   |-- Reviews
|   |-- ReviewForm
|   |-- NotFound
|   |-- Header
|-- App.js
|-- index.js
|-- index.css
|-- tailwind.config.js
|-- postcss.config.js
|-- api
|   |-- axios.js
/backend
|-- src/main/java/com/goldstream/api
|   |-- controllers
|   |-- services
|   |-- models
|   |-- repositories
|-- src/main/resources/application.properties
|-- pom.xml
```

---

## 📆 Setup & Installation

### Frontend

1. **Clone the repo:**

```bash
git clone https://github.com/yourusername/gold-stream.git
cd gold-stream/frontend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the app:**

```bash
npm start
```

### Backend

1. Navigate to the backend folder:

```bash
cd ../backend
```

2. Run the Spring Boot application:

```bash
./mvnw spring-boot:run
```

---

## 🚩 API Configuration with Ngrok

### Start your backend with ngrok:

```bash
ngrok http 8080
```

Example ngrok URL:

```
https://abcd1234.ngrok.io
```

### Create central Axios instance:

In `/frontend/src/api/axios.js`

```javascript
import axios from 'axios';

const API_BASE_URL = 'https://abcd1234.ngrok.io'; // Replace with your ngrok URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
```


---

## 🌍 Live Demo

[**Visit Gold Stream Live**](https://gold-stream-two.vercel.app/)

---

## 📚 License

This project is **MIT Licensed**.

---

## 🌟 Credits

* UI/UX Inspired by modern cinema apps

* API Data powered by **The Movie Database (TMDB)**

* UI/UX Inspired by modern cinema apps

* Developed by **Sanjo**

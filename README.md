# 📚 Book Notes App

A fast, minimalist personal book notes web application inspired by Derek Sivers’s note-taking style. Easily save and review key takeaways from the books you read. The app fetches metadata from the Open Library API and stores everything in a MongoDB database for quick access.

---

## ✨ Features

- 📝 Add new books with title, author, and rating
- 🔍 Auto-suggest book details and cover using Open Library API
- ✅ Confirm fetched data before saving to avoid incorrect entries
- 🗂 View all saved books in a clean list view
- 📌 Edit or delete your entries
- 💾 MongoDB-based persistent storage

---

## 🧰 Tech Stack

| Layer      | Technology           |
|------------|----------------------|
| Frontend   | HTML, CSS, EJS       |
| Backend    | Node.js, Express.js  |
| Database   | MongoDB              |
| API        | Open Library API     |
| Others     | Dotenv, Mongoose     |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/book-notes-app.git
cd book-notes-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the root directory:

```
MONGODB_URI = your_mongodb_connection_string
PORT=3000
```

### 4️⃣ Run the App

```bash
node app.js
```

Visit your app in the browser:

```
http://localhost:3000
```

---

## 🌍 Live Demo

> 🌐 Live Site: [Click here got Live Site](https://book-notes-app-jlbq.onrender.com/)

> 🔗 GitHub Repo: [github.com/ChiragChaudhary01/book-notes-app](https://github.com/ChiragChaudhary01/book-notes-app)

---

## 📸 Screenshots

_Add screenshots of your app here_

```
📘 Add Book Page
📗 Book List View
📕 Book Details
```

---

## 📁 Folder Structure

```
book-notes-app/
│
├── public/              # Static files (CSS, images)
├── views/               # EJS templates
├── routes/              # Express route files
├── models/              # Mongoose models
├── .env                 # Environment variables (ignored)
├── .gitignore
├── app.js               # Main server file
├── package.json
└── README.md
```

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss.

---

## 👤 Author

**Chirag Chaudhary**  
B.Tech IT | MERN Developer | Tech Creator  
- GitHub: [@ChiragChaudhary01](https://github.com/ChiragChaudhary01)  
- LinkedIn: [linkedin.com/in/chirag-chaudhary](https://www.linkedin.com/in/chirag-chaudhary-06a48825b/)

---

## 📄 License

This project is licensed under the MIT License.


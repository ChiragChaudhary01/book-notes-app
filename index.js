require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  cover_id: String,
  rating: Number,
  readDate: Date,
  notes: String,
});

const review = mongoose.model("review", bookSchema, "review");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to the MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection Error:", err));

app.use(express.static("public"));

app.get("/", async (req, res) => {
  const books = await review.find();
  console.log("Books:", books);
  res.render("index.ejs", { books });
});

app.get("/view/:id", async (req, res) => {
  const bookId = req.params.id;
  console.log("bookTitle", bookId);
  const book = await review.findOne({ _id: bookId });
  console.log("book", book);
  if (book) {
    res.render("particals/view.ejs", { book });
  } else {
    res.status(404).send("Book Not Found");
  }
});

app.get("/register", (req, res) => {
  res.render("particals/register.ejs");
});

app.get("/edit/:id", async (req, res) => {
  const bookId = req.params.id;
  console.log("bookTitle", bookId);
  const book = await review.findOne({ _id: bookId });
  console.log("book", book);
  if (book) {
    res.render("particals/register.ejs", { book });
  } else {
    res.status(404).send("Book Not Found");
  }
});

app.get("/delete/:id", async (req, res) => {
  const bookId = req.params.id;
  await review.deleteOne({ _id: bookId });
  res.redirect("/");
});

app.post('/book', async (req, res) => {
  const { title, author, rating, readDate, notes, id, confirmed } = req.body;

  console.log('Taken Id is:',id);
  let cover_id = "";
  try {
    const result = await axios.get('https://openlibrary.org/search.json?title=' + encodeURIComponent(title));
    const bookMatch = result.data.docs[0];

    if (!bookMatch || !bookMatch.author_name || !bookMatch.title) {
      return res.redirect('/register?error=Book+not+found');
    }

    cover_id = bookMatch.cover_edition_key || '';

    // If not confirmed yet, show confirmation page
    if (!confirmed) {
      return res.render('particals/confirm.ejs', {
        id,
        title,
        author,
        rating,
        readDate,
        notes,
        suggestedTitle: bookMatch.title,
        suggestedAuthor: bookMatch.author_name[0],
        cover_id
      });
    }

    // Save to DB only after confirmation
    if (id) {
      await review.findByIdAndUpdate(id, {
        title,
        author,
        rating,
        readDate,
        notes,
        cover_id
      });
    } else {
      await review.create({
        title,
        author,
        rating,
        readDate,
        notes,
        cover_id
      });
    }

    return res.redirect('/');
  } catch (err) {
    console.error("Database Error:", err.message);
    return res.status(500).send("Failed to save book");
  }
});


app.listen(port, () => {
  console.log("Listning Port:", port);
});

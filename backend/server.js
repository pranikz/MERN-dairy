const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes");
const connectDB = require("./config/db");
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const path  = require("path");
const res = require("express/lib/response");
connectDB();
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
  );
  next();
});


app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

//deployments

__dirname=path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build/")));
  app.get("*",()=> {
    res.sendFile(path.resolve(__dirname , 'frontend','build', 'index.html'));
  });
} else {
  app.get("/", (req, res) => res.send("Hello World! API working"));
}

// deployment

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

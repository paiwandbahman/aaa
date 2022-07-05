const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const corsOptions = {
  origin: "https://peshawa.tech/",
};
app.use(cors(corsOptions));
app.enable("trust proxy");
app.use("*", (req, res, next) => {
  if (req.secure) {
    return next();
  }
  res.redirect(`https://${req.hostname}${req.url}`);
});
const apiRequestLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 40,
  handler: function (req, res) {
    return res.status(429).json({
      error: "You sent too many requests. Please wait a while then try again",
    });
  },
});
app.use(apiRequestLimiter);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/images", express.static("images"));

//middleware
const auth = require("./middleware/auth");

//routes
const publicPost = require("./routes/public/post");
const authRoutes = require("./routes/auth/login");
const postAdminRoutes = require("./routes/admin/post");
const socialAdminRoutes = require("./routes/admin/social");
const slideAdminRoutes = require("./routes/admin/slide");

//public api
app.use("/public/", publicPost);
app.use("/auth", authRoutes);

//admin api
app.use("/admin/post", [auth], postAdminRoutes);
app.use("/admin/social", [auth], socialAdminRoutes);
app.use("/admin/slide", [auth], slideAdminRoutes);
//

__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  console.log("production");
  app.use(express.static(path.join(__dirname, "frontend/build")));

  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  console.log("not in production");
  app.get("/"),
    (req, res) => {
      res.send("api is runing");
    };
}
const PORT = process.env.PORT || 3001;
const urlConnection = `mongodb+srv://workaccount:RhLBqarwIi0mWWH4@peshawagroup.fvkjk.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(urlConnection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`
  )
);

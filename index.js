const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const { config } = require("dotenv");

const App = require("./routes/app_routes");
const Auth = require("./routes/auth_routes");
const User = require("./routes/user_routes");
const registerMail = require("./controllers/mailer");

config();

const app = express();

// Middlewares
app.use(express.json({ limit: "200kb" }));
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") {
  app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
}

app.use(cookieParser());

// API Routes
app.use("/auth", Auth);
app.use("/app", App);
app.use("/user", User);
app.use("/mail", registerMail);

// Serve frontend only in production
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "/client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  });
}

// Connect Database and Start Server
mongoose
  .connect(`${process.env.DB_URL}`)
  .then(() => {
    console.log("✅ Connected to DB");
    app.listen(process.env.PORT || 5001, () => {
      console.log(`🌟 Server running on port ${process.env.PORT || 5001}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

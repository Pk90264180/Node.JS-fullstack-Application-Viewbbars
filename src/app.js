const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const bcrypt = require("bcryptjs");
const PORT = process.env.PORT || 3000;
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const Register = require("./models/registers");
require("./db/conn");
const auth = require("./middleware/auth");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/secret", auth, (req, res) => {
  res.render("secret");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((currElem) => {
      return currElem.token !== req.token;
    });
    res.clearCookie("jwt");
    res.render("login");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/logoutall", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    res.clearCookie("jwt");
    await req.user.save();
    res.render("login");
  } catch (err) {
    res.status(500).render(err);
  }
});
app.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.confirmpassword;

    if (password === cpassword) {
      const registerEmployee = new Register({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone,
        age: req.body.age,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
      });

      // password hashing

      const token = await registerEmployee.generateAuthToken();

      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 30000000),
        httpOnly: true,
      });

      const registered = await registerEmployee.save();
      res.status(201).render("index");
    } else {
      res.send("passwords are not mathching");
    }
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const userEmail = await Register.findOne({ email: email });
    const isMatch = await bcrypt.compare(password, userEmail.password);
    const token = await userEmail.generateAuthToken();
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 300000000),
      httpOnly: true,
    });

    if (isMatch) {
      res.status(201).render("index");
    } else {
      res.send("invalid password or email");
    }
  } catch (err) {
    res.status(500).send("invalid log in details");
  }
});

app.listen(PORT, () => {
  console.log(`connection is setup at "http://localhost:${PORT}"`);
});

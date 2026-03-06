import express from 'express';
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(8080, () =>  console.log('Server started'));
const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'pass3' }
];


app.get("/", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(`Login attempt: Username=${username}, Password=${password}`);
  res.redirect("/dashboard");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard", { users : users });
});

app.get("/register", (req, res) => {
  res.render("register");
});
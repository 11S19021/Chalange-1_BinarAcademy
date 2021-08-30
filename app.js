const express = require("express");
const app = express();
const path = require("path");

const indexRouter = require("./routes/index");
const gameRouter = require("./routes/game");
const loginRouter = require("./routes/login");

app.set("view engine", "ejs");
app.use(express.static("views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/', gameRouter);
app.use('/', loginRouter.router);

app.listen(3000);

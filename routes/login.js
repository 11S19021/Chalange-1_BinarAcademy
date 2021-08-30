var express = require('express');
var router = express.Router();

const users = [{ email: "trivenapanjaitan7.1.3@gmail.com", password: "121212" }];
let result = { isLogged: false };

router
    .route('/login')
    .get((req, res) => {
        res.render("login", { title: 'Login' });
    })
    .post((req, res) => {
        const { email, password } = req.body;
        users.forEach((user) => {
            if (user.email === email && user.password === password) {
                result.isLogged = true;
                console.log('result', result)
            } else {
                result.isLogged = false;
                console.log('result', result)
            }
        });

        if (result.isLogged) {
            res.redirect("/games");
        } else {
            console.log("email atau password salah");
        }
    });

router.get('/logout', (req, res) => {
    result.isLogged = false;
    res.redirect("/");
});

module.exports = { router, result };



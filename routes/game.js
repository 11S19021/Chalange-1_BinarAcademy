const express = require('express');
const router = express.Router();
const login = require('./login')

const dataImgs = [
    { img: '/assets/img/batu.png' },
    { img: '/assets/img/kertas.png' },
    { img: '/assets/img/gunting.png' }
]

router.get('/games', function (req, res) {
    if (login.result.isLogged) {
        res.render("game", { dataImgs, title: 'Game' });
    } else {
        console.log("belum login bro");
        res.render("index");
    }
});

module.exports = router;

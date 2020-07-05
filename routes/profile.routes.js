
const express = require("express")
const router = express.Router()
const passport = require("passport")

const User = require("../models/user.model")
const Profile = require("../models/profile.model")


//User Profile

router.get("/profile", (req, res) => res.render("auth/profile"))

router.get("/edit", (req, res) => res.render("auth/edit"))



router.post('/edit', (req, res, next) => {
    const { name, picture, sex, idealweight } = req.body
    Profile
        .create({ name, picture, sex, idealweight })
        .then(x => res.redirect('/profile'))
        .catch(err => next(new Error(err)))
})



module.exports = router


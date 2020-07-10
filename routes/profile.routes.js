
const express = require("express")
const router = express.Router()
const passport = require("passport")

const User = require("../models/user.model")
// const Profile = require("../models/profile.model") // wtf


//User Profile

router.get("/profile", (req, res) => res.render("auth/profile"))

router.get("/users/:userId", (req, res, next) => {
    User.findById(req.params.userId)
        .then((user) => res.render("auth/edit", { user }))
        .catch(err => next(new Error(err)))

})


router.post('/users/:userId', (req, res, next) => {
    const { sex, targetWeight } = req.body
    console.log('traza', req.body)
    User.update({ _id: req.params.userId }, { sex, targetWeight })
        // .then(user => res.render('auth/profile'))
        .then(() => res.redirect('/profile'))
        .catch(err => next(new Error(err)))
})



module.exports = router
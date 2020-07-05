
const express = require("express")
const router = express.Router()
const passport = require("passport")

// const User = require("../models/user.model")
const Profile = require("../models/profile.model")


//User Profile

router.get("/profile", (req, res) => res.render("auth/profile"))


// router.post("/profile", (req, res, next) => {
//     const { name, picture, sex, idealweight } = req.body
// })

// module.exports = router


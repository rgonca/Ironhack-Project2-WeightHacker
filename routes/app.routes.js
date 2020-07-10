const express = require("express")
const router = express.Router()
const axios = require('axios')
const qs = require('qs')
const moment = require('moment')

const Registry = require("../models/registry.model")
const User = require("../models/user.model")



router.get('/app', (req, res, next) => {
    Registry.find({
        owner: req.user.id
    })
        .then(registries => {
            res.render('app/app', {
                registries
            })
        })
        .catch(err => next(new Error(err)))
})

//Creates a new registry
router.post('/registry/new', (req, res, next) => {
    const {
        date
    } = req.body
    Registry.create({
        owner: req.user.id,
        date: moment(date).format("MMM Do YY")
    })
        .then(() => res.redirect('/app'))
        .catch(err => next(new Error(err)))

})
//shows selected registry
router.get('/app/registry', (req, res, next) => {
    let registries = []
    let registry = {}
    Registry.find()
        .then(foundRegistries => {
            registries = foundRegistries
            return Registry.findById(req.query.registry)
        })
        .then((foundRegistry) => {
            registry = foundRegistry
            const {
                searchTerm
            } = req.query
            if (!searchTerm) {
                return null
            }
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    "x-app-id": `d4780a4b`,
                    "x-app-key": `1db1f17052ecb8cd9890644962072817`
                },
                data: qs.stringify({
                    query: searchTerm
                }),
                url: 'https://trackapi.nutritionix.com/v2/natural/nutrients'
            }
            return axios(options).then(responseData => responseData.data.foods[0])

        })
        .then(meal => res.render('app/app', {
            registries,
            registry,
            meal
        }))
        .catch(err => next(new Error(err)))
})

//pushes a new meal into registry
router.post('/app/registry', (req, res, next) => {
    Registry.findByIdAndUpdate(req.body.registryId, {
        $push: {
            meals: req.body
        }
    })
        .then((registry) => res.redirect(`/app/registry?registry=${registry._id}`))
        .catch(err => next(new Error(err)))
})
//splices a new meal out of the registry
router.post('/app/registry/delete', (req, res, next) => {

    Registry.findByIdAndUpdate(req.body.registryId, {
        $pull: {
            meals: {
                _id: req.body.mealId
            }
        }
    }, {
        new: true
    }

    )
        .then((registry) => res.redirect(`/app/registry?registry=${registry._id}`))
        .catch(err => next(new Error(err)))

});


module.exports = router
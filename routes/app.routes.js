
const express = require("express")
const router = express.Router()
const axios = require('axios')
const qs = require('qs')

// const Meal = require("../models/meal.model")
const Registry = require("../models/registry.model")
// const User = require("../models/user.model")



router.get('/app', (req, res, next) => {
    Registry.find()
    .then(registries => res.render('app/app', { registries }))
    .catch(err => next(new Error(err)))
})


router.post("/app/search", (req, res, next) => {
    console.log('formulario de busqueda', req.body)
    console.log('trazas', 'usuario', req.user)
    const options = {
        // const {food_name,serving_weight_grams, nf_calories} =
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            "x-app-id": `d4780a4b`,
            "x-app-key": `1db1f17052ecb8cd9890644962072817`
        },
        data: qs.stringify({ query: req.body.searchTerm }),
        url: 'https://trackapi.nutritionix.com/v2/natural/nutrients'
    }
    axios(options)
    .then(responseData => {
        const response = responseData.data.foods[0]
        console.log(response)
        res.render("app/meal", response)
    })
    .catch(error => next(error))
})

//Creates a new registry
router.get('/registry/new', (req, res) => res.render('app/registry'))

router.post('/registry/new', (req, res, next) => {
    const { date } = req.body
    console.log('Nuestro log:',req.user)
    Registry.create({ owner: req.user._id, date })
    .then(registry => res.redirect('/app'))
    .catch(err => next(new Error(err)))
    
})
//shows selected registry
router.get('/app/registry', (req, res, next) => {
    let registries = []
    Registry.find()
    .then(foundRegistries => {
        registries = foundRegistries
        return Registry.findById(req.query.registry)
    })
    .then((registry) => res.render('app/app', { registries, registry }))
    .catch(err => next(new Error(err)))
})
//pushes a new meal into registry

router.post('/app/registry', (req, res, next) => {
    const { meals } = req.body
    console.log('traza', 'micuerposerrano',req.body)
    Registry.findByIdAndUpdate(req.params.id, { $push: {meals} })
    .then(() => res.redirect(`/app/registry/${req.params.id}`))
    .catch(err => next(new Error(err)))
})




//Crea una nueva comida
//REVISAR RUTAS EN EL CLIENTE
// router.get('/meal/new', (req, res, next) => {
//     Registry.find() //  buscar registro por usuario??
//     .then(registry => res.render('app/meal', { registry }))
//     .catch(err => next(new Error(err)))

// })

// router.post('/meal/new', (req, res, next) => {
//     const { image, name, kcal, amount_gr } = req.body
//     Meal.create({ image, name, kcal, amount_gr })
//     .then(x => res.redirect('/profile'))
//     .catch(err => next(new Error(err)))
// })



module.exports = router


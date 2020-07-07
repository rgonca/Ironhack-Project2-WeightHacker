
const express = require("express")
const router = express.Router()
const axios = require('axios')
const qs = require('qs')

const Meal = require("../models/meal.model")
const Registry = require("../models/registry.model")
// const User = require("../models/user.model")



router.get('/users/:userId/app', (req, res, next) => res.render('app/app'))
//NECESITO HACER UNA LLAMADA AL ID DEL USUARIO
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
        // console.log(response.status
        // console.log(response.data)
    })
    .catch(error => next(error))
})

//crear ruta para añadir nuevo meal(instancia del modelo meal), en esa ruta hacer un push al array en registry,
//findoneAndUpdate del array meal de registry 
//añadir nuevo meal significa hacer push al array meal del modelo registry


//Crea registro de cero
router.get('/registry/new', (req, res) => res.render('app/registry'))

router.post('/registry/new', (req, res, next) => {
    const { owner, date } = req.body
    Registry.create({ owner, date })
    .then(registry => res.redirect(`/profile`))//ESTA RUTA DEBE CAMBIARSE LUEGO
    .catch(err => next(new Error(err)))
    
})

//Crea una nueva comida
router.get('/meal/new', (req, res, next) => {
    Registry.find() //  buscar registro por usuario??
    .then(registry => res.render('app/meal', { registry }))
    .catch(err => next(new Error(err)))
    
})

router.post('/meal/new', (req, res, next) => {
    const { image, name, kcal, amount_gr } = req.body
    Meal.create({ image, name, kcal, amount_gr })
        .then(x => res.redirect('/profile'))
        .catch(err => next(new Error(err)))
})
//Añade una comida a un registro existente

// router.get('', (req, res, next) =>)




module.exports = router



const express = require("express")
const router = express.Router()
const axios = require('axios')
const qs = require('qs')

// const Meal = require("../models/meal.model")
const Registry = require("../models/registry.model")


router.get('/app', (req, res, next) => res.render('app/app'))

router.post("/app/search", (req, res, next) => {
    console.log('formulario de busqueda', req.body)
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
        // console.log(response.status)
        // console.log(response.data)
    })
    .catch(error => next(error))
})

// router.post('', (req, res, next) => {
//     const { owner, date, name, kcal, meals, amount_gr } = req.body
//     Registry.create({ owner, date, name, kcal, meals, amount_gr })
//     .then()
// } )




//Añade comida al registro existente
router.get('/app/meal', (req, res, next) => {
    Registry.find() //  buscar registro por usuario??
    .then(userRegistry => res.render('app/app', {userRegistry}))
    .catch(err => next(new Error(err)))
    
})

//Crea registro de cero
router.get('/users/:userId/registry', (req, res) =>  res.render('app/registry'))

router.post('/users/:userId/registry', (req, res, next) => {
    const { date, name, kcal, amount_gr } = req.body
    Registry.create({ _id: req.params.userId }, { date, name, kcal, amount_gr })
    // .then(registry => res.render("app/registry"))
    .catch(err => next(new Error(err)))
    
})




//res.render y crear vista para mostrar info q necesitemos
//meter funcion para calcular calorias router.get("/signup", (req, res) => res.render("auth/signup"))

module.exports = router

//Crear en la vista de la barra de busqueda una tabla donde se muestre el resultado de la busqueda y un boton de añadido (+) al registro.


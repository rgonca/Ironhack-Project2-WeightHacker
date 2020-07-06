
const express = require("express")
const router = express.Router()
const axios = require('axios')
const qs = require('qs')


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
            res.render("app/app", response)
            // console.log(response.status)
            // console.log(response.data)
        })
        .catch(error => next(error))
})

//res.render y crear vista para mostrar info q necesitemos
//meter funcion para calcular calorias router.get("/signup", (req, res) => res.render("auth/signup"))

module.exports = router


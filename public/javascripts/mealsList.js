const express = require("express")
const router = express.Router()
const axios = require('axios')
const qs = require('qs')

// PINTAR REGISTRO AÑADIDO EN EL DOM (app.hbs)



//we added this event listener to the button on meal.hbs "add this item to log"
document.getElementById('mealsListButton').addEventListener('click', (event) => {

    event.preventDefault()

    router.post("/app/registry", (req, res, next) => {

        const options = {
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
                console.log('reply api', response)
                //ESTA SERÍA LA IDEA:

                // response.forEach(elm => {
                //     // here we clone the containers created in app.hbs in order to 'contain' all registries added to the DDBB
                //     const containerAll = document.querySelector('.mealContainer')
                //     let containerMeals = document.querySelector('.mealList').cloneNode(true)

                //     containerMeals.innerHTML = `<p>Name: ${elm.name}, Kcal: ${elm.kcal}</p>`

                //     containerAll.appendChild(containerMeals)
                //     res.render("app/app", response)
                // })
            }
            )
    })
})



//Function to return daily kcal total
const kcalTotal = (registry) => {
    registry.forEach(calories => {
        //registry is an array of objects and we need to access the element kcal of each object
        let kcalDaily = calories.filter((d) => d.kcal) // we create a new array with only the element kcal of all objects
        return kcalDaily.reduce((a, b) => a + b, 0) // we sum all kcal together for the total kcal daily
    })
}


module.exports = router

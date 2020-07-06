//import axios y qs
const axios = require('axios')
const qs = require('qs')



const getMeals = () => {
    return axios.post('https://trackapi.nutritionix.com/v2/natural/nutrients', {
        headers: {
            "x-app-id": 'd4780a4b',
            "x-app-key": '1db1f17052ecb8cd9890644962072817'
        }
    })
        .then(res => {
            console.log('Get meal: ', res.data)
            return res.data
        })
        .catch(error => console.log('Error getting list', error))
}
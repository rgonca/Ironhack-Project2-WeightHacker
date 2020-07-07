<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const User = require("../models/user.model")



// get history of user weights from DDBB
router.get('/profile', (req, res, next) => {
    User.find()
        .then(data => data.json())  //res.render('auth/profile'))  ?????
        .then(data => printCharts(data))
}



//print weights by date
const printCharts = data => {
    // Remove loading message, show chart panels 
    document.body.classList.add('running')

    // Call chart function passing the weight data and DOM Canvas tag ID to be rendered
    modelDoughnutChart(data, 'chart4')
}



const modelDoughnutChart = (coasters, id) => {

    const data = {
        // labels: [(insert dates here)],
        datasets: [
            {
                data: [
                    // coasters.filter(eachCoaster => eachCoaster.country === 'United States'),   ???????
                ],
                borderColor: styles.color.solids.map(eachColor => eachColor),
                backgroundColor: styles.color.alphas.map(eachColor => eachColor),
                borderWidth: 1
=======
// API Ajax call
fetch('https://coasters-api.herokuapp.com/')
    .then(response => response.json())
    .then(data => printCharts(data))


function printCharts(coasters) {

    // Remove loading message, show chart panels 
    document.body.classList.add('running')

    // Call each chart function passing the coasters and DOM Canvas tag ID to be rendered
    compareRadialChart(coasters, 'chart2')
    // modelDoughnutChart(coasters, 'chart4')
    // heightRadarChart(coasters, 'chart3')

}


function compareRadialChart(coasters, id) {

    // Every ChartJS chart needs data with labels and datasets
    const data = {
        labels: ['EEUU', 'UK', 'España', 'Japón', 'China'],
        datasets: [   // datasets is an Array of Objects, each Object contains one set of info/styles to be shown. In many charts, multiple sets of info can be rendered if multiple Objets are passed to the datasets Array
            {
                data: [
                    coasters.filter(eachCoaster => eachCoaster.country === 'United States').length,
                    coasters.filter(eachCoaster => eachCoaster.country === 'United Kingdom').length,
                    coasters.filter(eachCoaster => eachCoaster.country === 'Spain').length,
                    coasters.filter(eachCoaster => eachCoaster.country === 'Japan').length,
                    coasters.filter(eachCoaster => eachCoaster.country === 'China').length
                ],
                borderWidth: 1,
                borderColor: styles.color.solids.map(eachColor => eachColor),
                backgroundColor: styles.color.alphas.map(eachColor => eachColor)
>>>>>>> origin
            }
        ]
    }

<<<<<<< HEAD
    const options = {
=======
    // Every ChartJs chart can have multiple layout options
    const options = {
        scale: {
            gridLines: {
                color: '#444'
            },
            ticks: {
                display: false
            }
        },
>>>>>>> origin
        legend: {
            position: 'right',
            labels: {
                fontColor: '#fff'
            }
        }
    }

<<<<<<< HEAD
    new Chart(id, { type: 'doughnut', data, options })
}


module.exports = router
=======
    // Every ChartJS chart receives two arguments: the Canvas id to place the chart, and an object with: chart type, data to show, layout options object (optional)
    new Chart(id, { type: 'polarArea', data, options })
}








>>>>>>> origin

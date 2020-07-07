// const express = require('express')
// const router = express.Router()
// const User = require("../models/user.model")



// // get history of user weights from DDBB
// router.get('/profile', (req, res, next) => {
//     User.find()
//         .then(data => data.json())  //res.render('auth/profile'))  ?????
//         .then(data => printCharts(data))
// }



// //print weights by date
// function printCharts(data) {

//         // Remove loading message, show chart panels 
//         document.body.classList.add('running')

//         // Call each chart function passing the coasters and DOM Canvas tag ID to be rendered
//         modelDoughnutChart(data, 'chart4')
//     }

// function modelDoughnutChart(coasters, id) {

//         const data = {
//             // labels: [],
//             datasets: [
//                 {
//                     data: [
//                         // coasters.filter(eachCoaster => eachCoaster.country === 'United States'),   ???????
//                     ],
//                     borderColor: styles.color.solids.map(eachColor => eachColor),
//                     backgroundColor: styles.color.alphas.map(eachColor => eachColor),
//                     borderWidth: 1
//                 }
//             ]
//         }

//         const options = {
//             legend: {
//                 position: 'right',
//                 labels: {
//                     fontColor: '#fff'
//                 }
//             }
//         }

//         new Chart(id, { type: 'doughnut', data, options })
//     }
// )


// module.exports = router

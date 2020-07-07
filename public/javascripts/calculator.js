
function onCalculateButtonClick() {
    console.log('traza', 'yo calculo las calorias')
    
    const weight = document.querySelector('#mealWeight input').value
    console.log('traza', weight)
    const calories = document.querySelector('.calories span').innerHTML
    const serving = document.querySelector('.serving span').innerHTML
    
    
    
    let totalCalories = (weight / serving) * calories
    
    document.querySelector('.totalCalories span').innerHTML = totalCalories
    
    return totalCalories
};


const calculateCaloriesBtn = document.getElementById('calculate')
calculateCaloriesBtn.addEventListener('click', onCalculateButtonClick)


const weight = document.querySelector('#loQueTeVasAComerPutoGordo')
console.log('traza', 'global', weight)


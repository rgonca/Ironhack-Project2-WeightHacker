
function onMealWeightChange() {
    console.log('traza', 'yo calculo las calorias')

    const weight = document.querySelector('.mealWeight input').value
    console.log('traza', weight)
    const calories = document.querySelector('.calories span').innerHTML
    const serving = document.querySelector('.serving span').innerHTML



    let totalCalories = (weight / serving) * calories

    document.querySelector('.totalCalories span').innerHTML = totalCalories.toFixed(2)
    document.querySelector('#kcal').value = totalCalories
    document.querySelector('#amount_gr').value = weight
    return totalCalories
};


// const calculateCaloriesBtn = document.getElementById('calculate')
// calculateCaloriesBtn.addEventListener('click', onCalculateButtonClick)





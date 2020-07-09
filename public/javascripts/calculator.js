
//Calculator funcion
function onMealWeightChange() {
    const weight = document.querySelector('.mealWeight input').value
    const calories = document.querySelector('.calories span').innerHTML
    const serving = document.querySelector('.serving span').innerHTML

    let totalCalories = (weight / serving) * calories

    document.querySelector('.totalCalories span').innerHTML = totalCalories.toFixed(2)
    document.querySelector('#kcal').value = totalCalories
    document.querySelector('#amount_gr').value = weight
    return totalCalories
}

// Sum all total kcal
const calorieCount = () => {
    let total = 0
    const calorieCounter = document.querySelectorAll(".allKcal").value
    calorieCounter.forEach(elm => total += elm)
    return total
}


// const calculateCaloriesBtn = document.getElementById('calculate')
// calculateCaloriesBtn.addEventListener('click', onCalculateButtonClick)





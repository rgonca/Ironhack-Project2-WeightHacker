
function onMealWeightChange() {
    const weight = document.querySelector('.mealWeight input').value
    const calories = document.querySelector('.calories span').innerHTML
    const serving = document.querySelector('.serving span').innerHTML



    let totalCalories = (weight / serving) * calories

    document.querySelector('.totalCalories span').innerHTML = totalCalories.toFixed(2)
    document.querySelector('#kcal').value = totalCalories
    document.querySelector('#amount_gr').value = weight
    return totalCalories
};


function calorieCount() {
    const calorieCounter = document.querySelectorAll(".allKcal").value
    let totalKcal = calorieCounter.forEach(element => {((a, b) => a + b, 0)})
    return totalKcal
}

// const calculateCaloriesBtn = document.getElementById('calculate')
// calculateCaloriesBtn.addEventListener('click', onCalculateButtonClick)





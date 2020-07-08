document.getElementById('.mealsListButton').addEventListener('click', (event) => {
    //we need to add this event listener to the button on meal.hbs "add this item to log"

    //we also need to make this onclick event to add the last search of the searchbar

    console.log('hola, mealsList.js')
    event.preventDefault()
    // here we need to call our registry and access each element added
    Registry.find() // ESTO NO 
        .then(res => {
            console.log('getting registries from mealsList.js')
            res.forEach(elm => {
                //here we clone the containers created in app.hbs in order to 'contain' all registries added to the DDBB
                const containerAll = document.querySelector('.mealContainer')
                let containerMeals = document.querySelector('.mealList').cloneNode(true)

                containerMeals.innerHTML = `<p>Name: ${elm.name}, Kcal: ${elm.kcal}</p>∫`

                containerAll.appendChild(containerMeals)
            })
        })
})



//Function to return daily kcal total
const kcalTotal = (registry) => { //registry is an array of objects and we need to access the element kcal of each object
    let kcalDaily = registry.filter((d) => d.kcal) // we create a new array with only the element kcal of all objects
    return kcalDaily.reduce((a, b) => a + b, 0) // we sum all kcal together for the total kcal daily
}
# Ironhack - Project 2 
## WeightHacker

MVP:

•	API Nutritionix
•	Mobile Only
•	User authentication
•	Customization of calory budget
•   Searchbar for meal (ingredient/recipe) in DDBB, adding kcal to bar
•   Possibility of adding new ingredient/recipe through a form
•   Show graph with calories consumed per day/week/month
•	Register weight periodically and show weight graph in a calendar


NICE TO HAVE:

•   Photo gallery for meal inspiration
•   Showing nutritional value of meal, apart from kcal



ENDPOINTS SUMMARY:

1. Sign up API - done
POST /signup


2. Login API - done
POST /login


3. Change kcal budget per day
PATCH /users/:userId


4. Register meal kcal per day
POST /meals
-meal name
-kcal
<!-- https://trackapi.nutritionix.com/v2/natural/nutrients -->



5. Getting max kcal budget monthly
GET users/:userId


<!-- 6. API for checking nutritional value -->
<!-- GET /nutrients?meal=comida -->


7. Obtaining historical data on previous meals
GET /meals


8. Deleting previous meals
DELETE /meals/:mealId


9. Obtain historical data on consumed kcal
GET /history?from=12-12-12&to=12-12-12


10. Register weight
POST /weigths


11. Obtain historical data on user's weight
GET /weights



//barra de busqueda autocompletable



Endpoints Table

https://docs.google.com/document/d/1OHunDXJFPNSby8PSIBlEq83TdxhMudEehAKHHALQi-8/edit?usp=sharing

Autocomplete searchbar
calendar?
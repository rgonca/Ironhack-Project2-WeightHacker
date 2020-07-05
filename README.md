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


Nice to have:

•   Photo gallery for meal inspiration
•   Showing nutritional value of meal, apart from kcal



Endpoints summary:

1 Sign up API - done

2 Login API - done

3 Register kcal budget per day

4 Getting max kcal budget monthly

<!-- 5 API for checking nutritional value -->

6 Adding consumed kcal to daily register

7. Representing kcal per day

8. Representing kcal per month





***
1 api para registrarse 
-done POST /signup  2 login -done POST /login  3 cambiar presupuesto calorico kcal por dia PATCH /users/:userId  4 obtener presupuesto calorico max mensual GET /users/:userId  5 api para consultar valor nutricional GET /nutrients?meal=comida  6 registrar una comida que se ha zampado el usuario POST /meals  - name - kcal  7 obtener el historico de comidas anteriores GET /meals  8 borrar comidas anteriores DELETE /meals/:mealId  9. devuelve kcal GET /history?from=12-12-12&to=12-12-12  10. registrar una medida de peso POST /weights  - kg  11. devolver historico de medidas de peso GET /weights
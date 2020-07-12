# Ironhack - Project 2 
## WeightHacker: Calorie counter using Nutritionix API

Contributors: Miriam & Roberto

Current status: work in progress. Frontend is pending, as well as adding graphs for weight tracking.


## ENDPOINTS SUMMARY

AUTH & PROFILE ROUTES:

| Method   | #GET    | #POST   | #GET   | #POST  | #GET           | #GET        | #POST          |
| -------- | ------- | ------- | ------ | ------ | -------------- | ----------- | -------------- |
| Endpoint | /signup | /signup | /login | /login | /users/:userId | /profile    | /users/:userId |

| Action   | Sign up | Sign up | Log in | Log in | Edit user      | Get profile | Edit user      |

APP ROUTES

| Method   | #GET         | #POST         | #GET           | #POST            | #POST                |
| -------- | ------------ | ------------- | -------------- | ---------------- | -------------------- |
| Endpoint | /app         | /registry/new | /app/registry  | /app/registry    | /app/registry/delete |
| -------- | ------------ | ------------- | -------------- | ---------------- | -------------------- |
| Action   | Get registry | New registry  | Shows registry | Logs meal        | Deletes meal         |


## Dependencies
```bash
npm i
```

## Running
```bash
npm run dev
```

Make sure you modify .env and add Nutritionix API keys.









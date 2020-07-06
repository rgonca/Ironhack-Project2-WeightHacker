class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl
        this.axiosApp = axios.create({ baseURL: baseUrl })
    }

    //crear funcion que retorne llamada a la api en barra de busqueda
    //filtrar a food_name y nf_calories


    getMeals(meal) {
        return this.axiosApp.post('https://trackapi.nutritionix.com/v2/search/instant?query=`${meal}`', {
            headers: {
                "x-app-id": `${app_id}`,
                "x-app-key": `${app_key}`
            }
        })
            .then(res => {
                console.log('Get meal: ', res.data)
                return res.data
            })
            .catch(error => console.log('Error getting list', error))
    }

    // getOneRegister(id) {
    //     return this.axiosApp.get(``)
    //         .then(res => {
    //             console.log('Get one register: ', res.data)
    //             return res.data
    //         })
    //         .catch(error => console.log('Error fetching one register', error))
}
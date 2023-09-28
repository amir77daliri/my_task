import axios from "axios"

const SERVER_URL = "http://localhost:8000/api/create-currency/";

class Services {
    createCurrency = (data) => {
        return axios.post(SERVER_URL, data)
    }
}

const AppService = new Services()

export default AppService;
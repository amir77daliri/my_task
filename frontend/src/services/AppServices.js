import axios from "axios"

const SERVER_URL = "http://localhost:8000/api";

class Services {
    createCurrency = (data) => {
        const url = `${SERVER_URL}/create-currency/`
        return axios.post(url, data)
    }
}

const AppService = new Services()

export default AppService;
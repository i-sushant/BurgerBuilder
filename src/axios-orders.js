import axios from 'axios'

const instance = axios.create({
    baseURL:'https://burger-builder-sushant.firebaseio.com/'
})
export default instance
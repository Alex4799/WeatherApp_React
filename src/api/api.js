import axios from 'axios'

export const api=axios.create({
    baseURL:'https://api.openweathermap.org/data/2.5'
})

export const api_key='22c3489cf69285c9f93a041e2c8d20be'
import axios from './baseAPI'

const URLPAGES = `https://demo2697181.mockable.io/pages`;


const getAllPages = () => {
    return axios.get(URLPAGES).then(response => response.data.data)
}


export {
    getAllPages
}
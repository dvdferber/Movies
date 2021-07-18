const axios = require('axios')

const getAll = async(url) =>{
    const resp = await axios.get(url)
    return resp.data
}
module.exports = {getAll}  
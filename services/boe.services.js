import axios from 'axios'

class BoeServices {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/boe`
        })
    }
    getBoes = () => this.instance.get('/')
    create = (boe) => this.instance.post('/new', boe)
    getBoeId = (id) => this.instance.get(`/${id}`)
}

export default BoeServices; 
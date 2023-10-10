import axios from 'axios'
import config from '@/root/config'

export default axios.create({ baseURL: config.apiUrl })

import axios from 'axios'

export function request(config) {
  const instace = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })
  instace.interceptors.response.use(
    res => {
      return res.data
    }
  )

  return instace(config)
}
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '66b53ae0890cb54443d09882e866db67',
    language: 'pt-BR',
    page: 1
  }
})

export default api

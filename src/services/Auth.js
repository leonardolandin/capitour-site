import { http } from '@/config/axios'

export default {
  login: (data) => {
    return http.post('login', data)
  },
  verifyToken: (token) => {
    return http.post('token', { token })
  }
}

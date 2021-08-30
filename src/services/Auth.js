import { http } from '@/config/axios'

export default {
    login: (data) => {
        return http.post('login', data)
    }
}
import { http } from '@/config/axios'

export default {
  getByType: (data) => {
    return http.get(`infoByType/${data}`)
  }
}

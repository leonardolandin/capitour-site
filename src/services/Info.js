import { http } from '@/config/axios'

export default {
  getByType: (data) => {
    return http.get(`infoByType/${data}`)
  },
  setEditInfo: (data) => {
    return http.post('editInfo', data)
  },
  setNewInfo: (data) => {
    return http.put('newInfo', data)
  },
  updateStatus: (data) => {
    return http.post('setStatus', data)
  }
}

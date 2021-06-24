import request from '@/utils/request'
const api_name = '/edu/teacherFront'
export default {
  getPageList(page, limit) {
    return request({
      url: `${api_name}/getTeacherFrontList/${page}/${limit}`,
      method: 'get'
    })
  },
  getById(teacherId) {
    return request({
      url: `${api_name}/getTeacher/${teacherId}`,
      method: 'get'
    })
  }
}

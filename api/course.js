import request from '@/utils/request'

export default {
  getPageList(page, limit, searchObj) {
    return request({
      url: `/edu/courseFront/getCourseFrontList/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  // 获取课程一二级分类
  getNestedTreeList2() {
    return request({
      url: `/edu/subject/treeList`,
      method: 'get'
    })
  },
  getById(courseId) {
    return request({
      url: `/edu/course/getCourseFront/${courseId}`,
      method: 'get'
    })
  }
}

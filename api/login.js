import request from '@/utils/request'
export default {
  // 登录
  submitLogin(userInfo) {
    return request({
      url: `/ucenter/member/login`,
      method: 'post',
      data: userInfo
    })
  },
  // 根据token获取用户信息
  getLoginInfo() {
    return request({
      url: `/ucenter/member/auth/getLoginInfo`,
      method: 'get'
      // headers: {'token': cookie.get('token')}
    })
    // headers: {'token': cookie.get('token')}
  }
}

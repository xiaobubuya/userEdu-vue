import request from '@/utils/request'

export default {
  // 根据手机号码发送短信
  getMobile(mobile) {
    return request({
      url: `/msm/send/${mobile}`,
      method: 'get'
    })
  },

  getEmail(email) {
    return request({
      url: `/msm/sendEmail/${email}`,
      method: 'get'
    })
  },
  // 用户注册
  submitRegister(formItem) {
    return request({
      url: `/ucenter/member/register`,
      method: 'post',
      data: formItem
    })
  }
}

import request from './request'

export const reqLogin = (info) => request({ url: '/user', method: 'post', data: info })
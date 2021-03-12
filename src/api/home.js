import instance from '@/utils/request'

/* 获取演讲家所学课程 */
export function getOratorList (id) {
  return instance({
    url: `/orator/fullData/${id}`,
    method: 'POST',
    hideLoading: true

  })
}

/* 获取演讲家列表 */
export function getOrator (page, list) {
  return instance({
    url: `/orator/list/${page}/${list}`,
    method: 'get',
    hideLoading: true
  })
}
export function oratorSignUp (data) {
  return instance({
    url: '/orator/signUp',
    method: 'post',
    data,
    hideLoading: true
  })
}

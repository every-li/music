import http from '@/utils/request';

// 获取轮播图
export const getBanners = async () => {
  return await http.get('/banner?type=1');
};

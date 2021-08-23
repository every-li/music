import http from '@/utils/request';

// 获取轮播图
export const getBanners = async () => {
  return await http.get('/banner?type=1');
};

// 获取推荐歌单
export const getRecommendList = async () => {
  return await http.get('/personalized');
};



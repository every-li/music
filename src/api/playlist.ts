import http from '@/utils/request';

export const getPlayList = async (id: number) => {
  return await http.get(`/playlist/detail?id=${id}`);
};

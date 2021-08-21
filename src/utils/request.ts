import axios from 'axios';
import { Toast } from 'vant';

// 封装axios
const service = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000,
  headers: { 'content-type': 'application/json; charset=utf-8' },
});

// 添加请求拦截器
service.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
service.interceptors.response.use(response => {
  const res = response.data;
  if (typeof res !== 'object') {
    Toast.fail('服务器错误');
    return Promise.reject(res);
  }
  if (res.code != 200) {
    if (res.message) {
      Toast.fail(res.message);
    }
    return Promise.reject(res);
  }
  return res;
});

class Http {
  /**
   *
   * @param url  请求urL
   * @param params  http params
   * @returns Promise<any>
   */
  get(url: string, params?: unknown): Promise<any> {
    return service({
      method: 'get',
      url,
      params,
      withCredentials: true,
    });
  }
  /**
   *
   * @param url 请求url
   * @param data http body
   * @param params http params
   * @returns
   */
  post(url: string, data?: unknown, params?: unknown): Promise<any> {
    return service({
      method: 'post',
      url,
      params,
      data,
      withCredentials: true,
    });
  }
}

const http = new Http();

export default http;

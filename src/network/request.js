import axios from "axios";
export function request(config){
  const insta1 = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  // 拦截器
  // request:请求拦截
  insta1.interceptors.request.use(suc =>{
    console.log(suc);
  //  1.比如config中的一些信息不符合服务器的需求

  //  2.比如每次发生请求时，都希望在界面中显示一个请求图标

  //  3.某些网络请求（比如登入（token），必须携带一些页面信息

  //  拦截器拦截成功后一定要返回一个值，不让就无法请求
    return suc
  },err =>{
    console.log(err);
  })
  // 响应拦截
  insta1.interceptors.response.use(suc =>{
    console.log(suc);
  //  拦截成功后一定要返回一个值，否则返回一个undefined
    return suc.data
  },err =>{
    console.log(err);
  })
  return insta1(config)

}

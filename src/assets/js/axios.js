import Axios from "axios";

const AxiosInst = Axios.create({
  baseURL: "http://localhost:9000/api"
});

AxiosInst.interceptors.request.use(config => {
  config.headers["Access-Control-Allow-Origin"] = "*"; // CORS 설정(모든 리소스 허용)
  return config;
});

export default AxiosInst;

import Axios from "axios";
import userStore from "../../store/modules/userStore";

const AxiosInst = Axios.create({
  baseURL: "http://localhost:9000/api"
});

AxiosInst.interceptors.request.use(config => {
  console.log(userStore.state);
  const token = userStore.state.userInfo.accessToken;
  config.headers["Access-Control-Allow-Origin"] = "*"; // CORS 설정(모든 리소스 허용)
  config.headers["Authorization"] = token;
  return config;
});

export default AxiosInst;

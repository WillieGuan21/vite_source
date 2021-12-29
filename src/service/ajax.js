import axios from "axios";
import store from "../store";
import router from "../router";
import dayjs from "dayjs";
// import { useRouter } from "vue-router";
export default function ajax({
  url,
  method = "get",
  data = null,
  isLoading = false,
}) {
  return new Promise((resolve, reject) => {
    if (isLoading) store.commit("m_setLoadingStatus", true);
    let headers = Object.assign(
      {
        "Content-Type": "application/json",
        dateTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        // 'timeZoneCode': Math.round(new Date().getTimezoneOffset() / 60),
      },
      store.getters.g_userToken
        ? { Authorization: `Bearer ${store.getters.g_userToken}` }
        : {}
    );

    const instance = axios.create({
      headers,
      baseURL: "/rMeeting/",
      // withCredentials: true,
      timeout: 8000,
    });
    const applayInstance =
      method === "get"
        ? instance.get
        : method === "post"
        ? instance.post
        : method === "put"
        ? instance.put
        : instance.delete;

    applayInstance(url, data)
      .then((res) => {
        resolve(res);
      })
      .catch(function (err) {
        reject(err);
      })
      
  });
}

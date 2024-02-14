import { userStore } from "../store";
import axios from "axios";
import router from "../router";
import { rootConfigs } from "../configs";

export async function authUser(url, body) {
  const request = await axios.post(url, body, { withCredentials: true });
  const accessToken = request.data.accessToken;
  saveAccessToken(accessToken);
  verifyUser();
  router.push("/home");
  return request;
}

export async function verifyUser() {
  try {
    const store = userStore();
    const url = rootConfigs.verifyUser;
    const accessToken = sessionStorage.getItem("accessToken");
    if (!accessToken) {
      return false;
    }
    let request = await axios.get(url, {
      headers: {
        authorization: accessToken,
      },
    });

    store.setUserInfo(request.data);
    return true;
  } catch (e) {
    refreshUser();
  }
}

export async function refreshUser() {
  const url = rootConfigs.refreshUser;
  const request = await axios.get(url, { withCredentials: true });
  if (!request.data?.accessToken) {
    return;
  }
  saveAccessToken(request.data.accessToken);
  verifyUser();
}

export async function logoutUser() {
  const url = rootConfigs.logoutUser;
  const store = userStore();
  await axios.get(url, { withCredentials: true });
  sessionStorage.clear();
  store.setUserInfo({ name: "", email: "" });
  return true;
}

function saveAccessToken(accessToken) {
  if (!accessToken) {
    return;
  }
  sessionStorage.setItem("accessToken", accessToken);
}

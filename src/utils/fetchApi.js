import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export async function signinUserApi(userData) {
  const { data } = await axios.post("/auth/login", userData);
  token.set(data.accessToken);
  console.log("loginUserApi :>> ", data);
  return data;
}

export async function signupUserApi(userData) {
  await axios.post("/auth/signup", userData);
  const { email, password } = userData;
  const data = signinUserApi({
    email,
    password,
  });
  console.log("loginUserApi_data :>> ", data);
  return data;
}

export async function logoutUserApi(persistedToken) {
  token.set(persistedToken);
  const { data } = await axios.post("/auth/logout", persistedToken);
  token.unset();
  // console.log("logoutUserApi :>> ", data);
  return data;
}

// export async function getUserInfo(accessToken) {
//   if (accessToken) {
//     axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
//   }
//   const userInfo = await axios.get('auth/user');
//   return {
//     email: userInfo.email,
//   }
// }

// export async function refreshUserTokenApi({ refreshToken, _id }) {
//   token.set(refreshToken);
//   const { data } = await axios.get("/auth/refresh", { _id });
//   // console.log("refreshUserTokenApi_data :>> ", data);
//   return data;
// }

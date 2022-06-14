import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.baseURL = "https://pro-test-rest-api.herokuapp.com";

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

  token.set(data.ResponseBody.token);
  return data.ResponseBody;
}

export async function signupUserApi(userData) {
  await axios.post("/auth/signup", userData);
  const { email, password } = userData;
  const data = signinUserApi({
    email,
    password,
  });
  return data;
}

export async function logoutUserApi(persistedToken) {
  token.set(persistedToken);
  const { data } = await axios.post("/auth/logout", persistedToken);
  token.unset();
  return data;
}

export async function getUserInfo(accessToken) {
  if (accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;
  }
  const userInfo = await axios.get("auth/current");
  return { email: userInfo.email };
}

export async function refreshUserTokenApi({ persistedToken }) {
  token.set(persistedToken);
  const { data } = await axios.post("/auth/refresh", persistedToken);

  return data;
}

export async function questionsApi(testingType) {
  const { data } = await axios.get(`/test/${testingType}`);
  return data;
}

export async function questionsCheckApi({testType, questionInfo}) {  
  
  const { data } = await axios.post(`/test/check/${testType}`, questionInfo);
  console.log("Result (technicalQuestionsCheckApi)", data);
  return data.rightAnswers;  
}

export async function getContact() {
  const result = await axios.get("/contacts/");
  return result.data.ResponseBody;
}

export async function getResume(resume) {
  const response = await fetch(
    `http://localhost:3001/contacts/resume/${resume}`
  );

  if (response.status === 200) {
    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    link.remove();
    return downloadUrl;
  }
}

export async function getAvatar(name) {
  const result = await axios.post(`/avatars/upload/${name}`);
  console.log(result.data.avatar);
  return result;
}

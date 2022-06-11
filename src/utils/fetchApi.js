import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.baseURL= "https://pro-test-rest-api.herokuapp.com"

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
	token.set(data.ResponseBody.accessToken);
	// console.log("loginUserApi :>> ", data.ResponseBody);
	return data.ResponseBody;
}

export async function signupUserApi(userData) {
	await axios.post("/auth/signup", userData);
	const { email, password } = userData;
	const data = signinUserApi({
		email,
		password,
	});
	// console.log("signupUserApi_data :>> ", data);
	return data;
}

export async function logoutUserApi(persistedToken) {
	token.set(persistedToken);
	const { data } = await axios.post("/auth/logout", persistedToken);
	token.unset();
	// console.log("logoutUserApi :>> ", data);
	return data;
}

export async function getUserInfo(accessToken) {
	if (accessToken) {
		axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
			"accessToken"
		)}`;
	}
	const userInfo = await axios.get("auth/current");
	// console.log(userInfo)
	return { email: userInfo.email };
}

// export async function refreshUserTokenApi({ refreshToken, _id }) {
//   token.set(refreshToken);
//   const { data } = await axios.get("/auth/refresh", { _id });
//   // console.log("refreshUserTokenApi_data :>> ", data);
//   return data;
// }

export async function theoryQuestionsApi() {
	const { data } = await axios.get("/test/theory");
	return data;
}
export async function technicalQuestionsApi() {
	const { data } = await axios.get("/test/technical");
	return data;
}

export async function theoryQuestionsCheckApi(answersData) {
	// console.log("run theoryQuestionsCheckApi:", answersData);
  const { data } = await axios.post("/test/theory/check", answersData);
	// console.log("Result (theoryQuestionsCheckApi)", data);
	return data.rightAnswers;
}
export async function technicalQuestionsCheckApi(answersData) {
	// console.log("run technicalQuestionsCheckApi:", answersData);
  const { data } = await axios.post("/test/technical/check", answersData);
	// console.log("Result (technicalQuestionsCheckApi)", data);
	return data.rightAnswers;
}

export async function getContact() {
	const result = await axios.get("/contacts/");
	return result.data.ResponseBody;
}

export async function getResume(resume) {
  const response = await fetch(`http://localhost:3001/contacts/resume/${resume}`);
	
  if(response.status === 200) {
	const blob = await response.blob();
	const downloadUrl = window.URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = downloadUrl;
	link.target = "_blank";
	// link.download = resume;
	document.body.appendChild(link)
	link.click()
	link.remove()
	return downloadUrl;
  }
}
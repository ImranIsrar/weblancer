
import requests from "./httpService";

const Auth = {
  login(body) {
    return requests.post(`/users/login`, body)
  }
}

export default Auth;
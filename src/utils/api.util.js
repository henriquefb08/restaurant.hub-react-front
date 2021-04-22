import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "https://restaurant-hub.herokuapp.com/",
    });
  }

  login = async (payload) => {
    try {
      const { data } = await this.api.post("public/consumer/login", payload); 
      const { token } = data;
      localStorage.setItem("token", token);
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };
}

export default new Api();

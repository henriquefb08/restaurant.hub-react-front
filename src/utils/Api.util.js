import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "https://api-restaurant-hub.herokuapp.com/",
    });

    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers = {
            Authorization: `Bearer ${token}`,
          };
        }
        return config;
      },
      (error) => console.log(error)
    );
  }

  createConsumer = async (payload) => {
    try {
      const { data } = await this.api.post("public/consumer/signup", payload);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  createRestaurant = async (payload) => {
    try {
      const { data } = await this.api.post("public/restaurant/signup", payload);
      return data;
    } catch (e) {
      throw new Error(e);
    }
  };

  loginConsumer = async (payload) => {
    try {
      const { data } = await this.api.post("public/consumer/login", payload);
      const { token } = data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", data.payload)
      return data.payload;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };

  loginRestaurant = async (payload) => {
    try {
      const { data } = await this.api.post("public/restaurant/login", payload);
      const { token } = data;
      console.log(data)
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(data.payload))
      return data.payload;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };

  getAllRestaurants = async () => {
    try {
      const { data } = await this.api.get("public/restaurant/list");
      return data;
    } catch (e) {
      console.error(e);
    }
  };
  getItems = async (id) => {
    try {
      const { data } = await this.api.get(`public/item/list/${id}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  createItem = async (restaurant_id, name, value, description, category) => { 
    try {
      const {data} = await this.api.post(`private/item/new`, {restaurant_id, name, value, description, category})
      return data;
    } catch (error) {
            console.error(error);
    }
  }

  deleteItem = async (itemId) => { 
    try {
      const { data } = await this.api.delete(`private/item/delete/${itemId}`);
      return data
    } catch (e) {
      console.error(e);
    }
  }

  getConsumer = async (id) => {
    try {
      const { data } = await this.api.get(`private/consumer/list/${id}`);
      return data;
    } catch (e) {
      console.error(e);
    }
  };
  getRestaurant = async (id) => {
    try {
      const { data } = await this.api.get(`public/restaurant/list/${id}`);
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  logout = () => {
    localStorage.removeItem("token");
    console.log("logout efetuado");
    window.location = "/";
  };

  editConsumer = async (dataConsumer, id) => {
    try {
      const { data } = await this.api.put(
        `private/consumer/edit/${id}`,
        dataConsumer
      );
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  editRestaurant = async (dataRest, id) => {
    try {
      const { data } = await this.api.put(
        `private/restaurant/edit/${id}`,
        dataRest
      );
      return data;
    } catch (e) {
      console.error(e);
    }
  };
  

}
export default new Api();

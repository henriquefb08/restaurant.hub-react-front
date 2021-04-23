import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "https://restaurant-hub.herokuapp.com/",
    });

    this.api.interceptors.request.use( 
      config => { 
        const token = localStorage.getItem('token');
        if (token) { 
          config.headers = { 
            Authorization: `Bearer ${token}`
          };
        };
      return config;
      },
      error => console.log(error)
    )
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

  getAllRestaurants = async ( ) => { 
    try {
      const { data } = await this.api.get('public/restaurant/list')
      return data
    } catch (e) {
      console.error(e);
    }
  }
  logout = () => {
    localStorage.removeItem("token");
    console.log("logout efetuado");
    window.location = '/'
  };


}

export default new Api();

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

  createConsumer = async (payload) => { 
    try {
      const { data } = await this.api.post("public/consumer/signup", payload)
      return data 
    } catch (error) {
      throw new Error(error);
    }

  }




  loginConsumer = async (payload) => {
    try {
      const { data } = await this.api.post("public/consumer/login", payload); 
      const { token } = data;
      localStorage.setItem("token", token);
      return data.payload
   
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };

  loginRestaurant = async (payload) => {
    try {
      const { data } = await this.api.post("public/restaurant/login", payload); 
      const { token } = data;
      localStorage.setItem("token", token);
      return data.payload
   
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

  getConsumer = async (id) => { 
    try {
       const { data } = await this.api.get(`/private/consumer/list/${id}`)
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

  editConsumer = async (dataConsumer, id) => { 
    try {
      const { data } = await this.api.put(`/private/consumer/edit/${id}`, dataConsumer)
      return data
    } catch (e) {
      console.error(e); 
    }
  } 


}

export default new Api();

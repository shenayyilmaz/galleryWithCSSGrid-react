import axios from "axios";

// create method is going to create instance of axios client with default propertys
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 9lk-oFW7bOciIkFxupW-s6AteOgKy4xDOt0fugzL4a4",
  },
});

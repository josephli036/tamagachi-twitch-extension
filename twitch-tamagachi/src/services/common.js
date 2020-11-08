import axios from "axios";

const HTTP = axios.create({
  baseURL: "https://protected-wildwood-31062.herokuapp.com/api",
});

export { HTTP as default };

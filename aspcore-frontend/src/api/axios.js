import axios from 'axios';

const obj = {
  baseURL: "https://localhost:7038/api/",
  headers: {}
};

obj.headers['Content-Type'] = 'application/json';

export default axios.create(obj);

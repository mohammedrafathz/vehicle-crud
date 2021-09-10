import Axios from 'axios';

let url = '';

if (process.env.NODE_ENV === "production") {
  url = 'http://localhost:3001/api/'
} else {
  url = 'http://localhost:3001/api/'
}

export default Axios.create({
  baseURL: url,
  headers: {}
})
import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: ' http://localhost:5001/may15-26585/us-central1/api',
});
p
export default instance;

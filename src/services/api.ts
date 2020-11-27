import axios from 'axios';

const api = axios.create({
  timeout: 5000,
  timeoutErrorMessage: 'Timed-out connection',
});

export default api;

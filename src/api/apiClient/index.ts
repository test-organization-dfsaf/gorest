import axios from 'axios';

export default axios.create({
  baseURL: 'https://gorest.co.in/public/v2/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  },
});

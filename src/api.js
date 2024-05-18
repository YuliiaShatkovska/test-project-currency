import axios from 'axios';
import Notiflix from 'notiflix';

// axios.defaults.baseURL = 'http://localhost:3005/api';
axios.defaults.baseURL = 'https://test-project-backend.onrender.com/api';

export const getDollarRate = async () => {
  try {
    const data = await axios.get('/currency/exchange');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const subscribeEmail = async ({ email, name }) => {
  try {
    const data = await axios.post('/users/subscribe', { email, name });

    return data;
  } catch (error) {
    Notiflix.Notify.info(error.response.data.message);
    console.log(error);
  }
};

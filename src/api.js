import axios from 'axios';
import Notiflix from 'notiflix';

// axios.defaults.baseURL = 'http://localhost:3005/api';
axios.defaults.baseURL = 'https://test-project-backend.onrender.com/api';

const bankUrl =
  'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&json';

export const getDollarRate = async () => {
  try {
    const response = await axios.get(bankUrl);
    const data = response.data;

    if (data.length > 0) {
      const usdRate = data[0].rate.toFixed(2);

      return usdRate;
    } else {
      throw new Error('Дані не отримано');
    }
  } catch (error) {
    throw new Error('Помилка при отриманні курсу долара:', error);
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

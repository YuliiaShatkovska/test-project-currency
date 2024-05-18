import Notiflix from 'notiflix';
import { useState } from 'react';
import { FaArrowDownLong } from 'react-icons/fa6';
import { IoIosHeartEmpty } from 'react-icons/io';
import {
  FormButton,
  FormInput,
  FormLabel,
  FormTitle,
} from './SubscribeForm.styled';
import { subscribeEmail } from 'api';

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const onChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'name':
        setName(value);
        break;

      default:
        console.log('finish');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    subscribeEmail({ email, name });
    Notiflix.Notify.success('Ви успішно підписались на розсилку! ');

    setEmail('');
    setName('');
  };

  return (
    <div style={{ margin: '0 auto', width: '400px' }}>
      <FormTitle>
        Хочеш отримувати курс доллара на свою пошту? Тоді підпишись на розсилку{' '}
        <FaArrowDownLong />
      </FormTitle>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ marginBottom: '16px' }}>
          <FormLabel htmlFor="user-name">Введи своє імʼя</FormLabel>
          <FormInput
            type="text"
            name="name"
            id="user-name"
            onChange={onChange}
            value={name}
          />
        </div>

        <div>
          <FormLabel htmlFor="user-email">
            Введи свій email <IoIosHeartEmpty style={{ fill: '#7be8ea' }} />
          </FormLabel>
          <FormInput
            type="email"
            name="email"
            id="user-email"
            onChange={onChange}
            value={email}
          />
        </div>

        <FormButton type="submit">Subscribe</FormButton>
      </form>
    </div>
  );
};

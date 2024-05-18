import { useEffect, useState } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CurrencyWrapper, DateText, UsdRateText } from './CurrencyBlock.styled';
import { getDollarRate } from 'api';

export const CurrencyBlock = () => {
  const [usd, setUsd] = useState(0);

  useEffect(() => {
    const getUsd = async () => {
      try {
        const { data } = await getDollarRate();

        setUsd(data.usdRate);
      } catch (error) {
        console.log(error);
      }
    };
    getUsd();
  }, [usd]);

  const date = new Date().toLocaleDateString('en-GB');

  return (
    <CurrencyWrapper>
      <DateText>{date}</DateText>
      <UsdRateText>
        Курс долара:
        <span>
          {usd} <BsCurrencyDollar size={20} />
        </span>
      </UsdRateText>
    </CurrencyWrapper>
  );
};

import styled from 'styled-components';

export const CurrencyWrapper = styled.div`
  padding: 40px;
  width: 400px;
  border: 1px solid #7be8ea;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const DateText = styled.p`
  color: #ffcc00;
  margin-bottom: 16px;
`;

export const UsdRateText = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;

  > span {
    color: #24bcbe;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

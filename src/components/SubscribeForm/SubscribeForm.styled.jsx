import styled from 'styled-components';

export const FormTitle = styled.h3`
  width: 400px;
  color: #ffcc00;
  margin-bottom: 20px;
  text-align: center;
`;

export const FormLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  background-color: transparent;
  border: 1px solid #7be8ea;
  padding: 10px;
  border-radius: 10px;
  width: 300px;
  cursor: pointer;
  color: currentColor;

  &:hover,
  &:focus {
    border-color: #ffcc00;
  }
`;

export const FormButton = styled.button`
  border: 1px solid #ffcc00;
  padding: 8px;
  border-radius: 8px;

  margin-top: 24px;

  &:hover,
  &:focus {
    border-color: #7be8ea;
  }
`;

import { CurrencyBlock } from 'components/CurrencyBlock/CurrencyBlock';
import { SubscribeForm } from 'components/SubscribeForm/SubscribeForm';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <CurrencyBlock />
      <SubscribeForm />
    </Container>
  );
};

export default App;

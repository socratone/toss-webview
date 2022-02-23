import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Bank = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Button onClick={() => navigate('/')}>뒤로 가기</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Bank;

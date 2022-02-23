import styled from '@emotion/styled';

type CardProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

const Card = ({ onClick, children }: CardProps) => {
  return <Container onClick={onClick}>{children}</Container>;
};

const Container = styled.article`
  padding: 20px;
  background-color: white;
  border-radius: 17px;
`;

export default Card;

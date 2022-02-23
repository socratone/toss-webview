import styled from '@emotion/styled';

type CardProps = {
  onClick?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Card = ({ onClick, children, style }: CardProps) => {
  return (
    <Container onClick={onClick} style={style}>
      {children}
    </Container>
  );
};

const Container = styled.article`
  padding: 20px;
  background-color: white;
  border-radius: 17px;
`;

export default Card;

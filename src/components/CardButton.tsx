import styled from '@emotion/styled';

type CardButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

const CardButton = ({ onClick, children }: CardButtonProps) => {
  return <Container onClick={onClick}>{children}</Container>;
};

const Container = styled.article`
  padding: 20px;
  background-color: white;
  border-radius: 17px;
  cursor: pointer;

  :hover {
    background-color: #fafafa;
  }
`;

export default CardButton;

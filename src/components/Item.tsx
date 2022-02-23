import styled from '@emotion/styled';
import Button from './Button';

type ItemProps = {
  iconColor: string;
  name: string;
  price: number;
  sendable?: boolean;
  style?: React.CSSProperties;
};

const Item = ({ iconColor, name, price, sendable, style }: ItemProps) => {
  return (
    <Container style={style}>
      <Icon style={{ background: iconColor }} />
      <TextContainer>
        <Name>{name}</Name>
        <Price>{price.toLocaleString()} 원</Price>
      </TextContainer>
      {sendable && (
        <ButtonContainer>
          <Button onClick={() => {}}>송금</Button>
        </ButtonContainer>
      )}
    </Container>
  );
};

const Container = styled.article`
  display: flex;
`;

const Icon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 15px;
`;

const TextContainer = styled.div`
  flex-grow: 1;
`;

const Name = styled.p`
  color: grey;
  font-size: 12px;
  margin-bottom: 2px;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  justify-self: flex-end;
`;

export default Item;

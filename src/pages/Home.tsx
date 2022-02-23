import styled from '@emotion/styled';
import { ReactComponent as DollarIcon } from '../assets/icons/dollar.svg';
import { ReactComponent as QRIcon } from '../assets/icons/qr.svg';
import { ReactComponent as BubbleIcon } from '../assets/icons/bubble.svg';
import { ReactComponent as BellIcon } from '../assets/icons/bell.svg';
import { ReactComponent as ArrowIcon } from '../assets/icons/arrow.svg';
import Card from '../components/Card';
import Item from '../components/Item';
import { useNavigate } from 'react-router-dom';
import CardButton from '../components/CardButton';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Contaienr>
      <Header>
        <LogoContainer>
          <DollarIcon />
          <LogoText>toss</LogoText>
        </LogoContainer>
        <IconContainer>
          <QRIcon />
          <BubbleIcon />
          <BellIcon />
        </IconContainer>
      </Header>
      <Main>
        <CardButton
          onClick={() => navigate('/bank')}
          style={{ marginBottom: '12px' }}
        >
          <TitleContainer>
            <Title>토스뱅크</Title>
            <ArrowIcon />
          </TitleContainer>
        </CardButton>
        <Card style={{ marginBottom: '12px' }}>
          <TitleContainer style={{ marginBottom: '20px' }}>
            <Title>자산</Title>
            <ArrowIcon />
          </TitleContainer>
          <Item
            iconColor="royalblue"
            name="토스뱅크 통장"
            price={100000000}
            sendable
            style={{ marginBottom: '30px' }}
          />
          <Item
            iconColor="gold"
            name="저축예금"
            price={9302}
            sendable
            style={{ marginBottom: '30px' }}
          />
          <Item
            iconColor="skyblue"
            name="우리사랑나누미 저축예금"
            price={347112}
            sendable
            style={{ marginBottom: '30px' }}
          />
          <Item
            iconColor="skyblue"
            name="저축 · 주택청약종합저축"
            price={347112}
            style={{ marginBottom: '20px' }}
          />
          <Line style={{ marginBottom: '20px' }} />
          <Item
            iconColor="dodgerblue"
            name="저축 · 주택청약종합저축"
            price={347112}
          />
        </Card>
        <Card style={{ marginBottom: '12px' }}>
          <TitleContainer style={{ marginBottom: '20px' }}>
            <Title>소비</Title>
          </TitleContainer>
          <Item
            iconColor="aquamarine"
            name="이번 달 쓴 금액"
            price={100000000}
            sendable
            style={{ marginBottom: '30px' }}
          />
          <Item
            iconColor="royalblue"
            name="2월 25일 낼 카드값"
            price={400000}
          />
        </Card>
        <Card>
          <TitleContainer style={{ marginBottom: '20px' }}>
            <Title>기타</Title>
          </TitleContainer>
          <Item
            iconColor="tomato"
            name="오늘"
            price={100000000}
            sendable
            style={{ marginBottom: '30px' }}
          />
          <Item iconColor="gold" name="내일" price={400000} />
        </Card>
      </Main>
    </Contaienr>
  );
};

const Contaienr = styled.section`
  padding: 0 18px 18px 18px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h1`
  margin-left: 5px;
  color: #b1b8c1;
  font-weight: 700;
  font-size: 27px;
  position: relative;
  top: -2px;
`;

const IconContainer = styled.div`
  display: flex;
  > * {
    margin-right: 20px;
  }
  > *:last-of-type {
    margin-right: 0;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

const Line = styled.div`
  background-color: rgb(242, 243, 245);
  height: 1px;
`;

export default Home;

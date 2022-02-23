import styled from '@emotion/styled';

type ButtonProps = {
  children: string;
  onClick: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};

const Btn = styled.button`
  border: 0;
  background-color: rgb(242, 243, 245);
  border-radius: 5px;
  color: rgb(106, 111, 114);
  font-size: 12px;
  height: 30px;
  padding: 0 14px;
  font-weight: 500;
  cursor: pointer;

  :hover {
    background-color: gainsboro;
  }
`;

export default Button;

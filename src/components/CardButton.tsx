import styled from '@emotion/styled';
import ButtonBase from '@mui/material/ButtonBase';

type CardButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const CardButton = ({ onClick, children, style }: CardButtonProps) => {
  const handleClick = () => {
    setTimeout(() => {
      onClick();
    }, 300);
  };

  return (
    <StyldButtonBase onClick={handleClick} style={style}>
      {children}
    </StyldButtonBase>
  );
};

const StyldButtonBase = styled(ButtonBase)`
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  background-color: white;
  border-radius: 17px;
  cursor: pointer;
`;

export default CardButton;

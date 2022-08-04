import { StyledContainer } from './Container.styled';
import Flag from '../../images/img123.jpg';
import MySvg from '../../images/fon.svg';

const Container = ({ children }) => {
  return (
    <StyledContainer img={Flag} svg={MySvg}>
      {children}
    </StyledContainer>
  );
};

export default Container;

import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { ImSpinner9 } from 'react-icons/im';

export const Spinner = ({ size }) => {
  return (
    <>
      <StyledSpinner size={size} />
    </>
  );
};

const spin = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(1turn);
}
`;

export const StyledSpinner = styled(ImSpinner9)`
  animation: ${spin} 1s linear infinite;
`;

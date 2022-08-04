import styled from 'styled-components';

const IconButton = ({ children, type = 'button', onClick, ...allyProps }) => {
  return (
    <StyledButton type={type} onClick={onClick} {...allyProps}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  border: ${p => p.theme.borders.none};
  background-color: transparent;
`;

export default IconButton;

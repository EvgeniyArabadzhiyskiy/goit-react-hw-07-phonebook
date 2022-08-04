import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  border: ${prop => prop.theme.borders.none};
  border-radius: ${prop => prop.theme.radii.normal};
  width: ${prop => (prop.width ? `${prop.width}px` : null)};
  padding: ${prop => prop.theme.space[2]}px ${prop => prop.theme.space[3]}px;
  color: ${prop => prop.theme.colors.whtBtn};
  background-color: ${prop => prop.theme.colors.primaryBtn};
  transition: background-color 300ms linear;

  &:disabled {
    opacity: 0.4;
    cursor: initial;
  }

  &:hover:not(:disabled) {
    background-color: ${prop => prop.theme.colors.hover};
  }

  svg{
    margin-right: ${prop => prop.theme.space[2]}px;
    vertical-align: bottom;
  }
`;

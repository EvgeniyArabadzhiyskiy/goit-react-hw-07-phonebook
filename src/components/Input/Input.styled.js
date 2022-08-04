import styled from 'styled-components';

export const StyledInput = styled('input')`
  display: block;
  width: inherit;
  margin-top: ${prop => prop.theme.space[3]}px;
  border-radius: ${prop => prop.theme.radii.normal};
  border: ${prop => prop.theme.borders.normal};
  outline: none;

  &:focus {
    outline: 2px solid blue;
  }
`;

import styled from 'styled-components';

export const UserName = styled.span`
  width: 150px;
  font-size: ${prop => prop.theme.fontSizes.m};
  font-weight: ${prop => prop.theme.fontWeights.semiBold};
`;

export const UserNumber = UserName;

export const CheckBoxLabel = styled.label`
  position: relative;
  color: black;

  & input {
    opacity: 0;
  }

  & > svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    fill: white;
  }

  & input:checked ~ svg {
    fill: ${p => p.theme.colors.primaryBtn};
  }
`;

export const CallLink = styled.div`
  margin-right: ${prop => prop.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
  border: ${prop => prop.theme.borders.none};
  border-radius: ${prop => prop.theme.radii.normal};
  padding: ${prop => prop.theme.space[2]}px ${prop => prop.theme.space[3]}px;
  background-color: ${prop => prop.theme.colors.primaryBtn};
  transition: background-color 300ms linear;

  &:hover {
    background-color: ${prop => prop.theme.colors.hover};
  }

  span {
    margin-left: ${prop => prop.theme.space[3]}px;
  }
`;
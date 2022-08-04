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
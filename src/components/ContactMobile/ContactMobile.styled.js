import styled from 'styled-components';

export const UserName = styled.button`
  width: 180px;
  border: ${p => p.theme.borders.none};
  background-color: transparent;
  text-align: left;
  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.semiBold};
`;

import styled from 'styled-components';

export const FormLabel = styled.label`
  position: relative;
  display: block;
  width: 100%;
  font-weight: ${prop => prop.theme.fontWeights.semiBold};
  margin-bottom: ${prop => prop.theme.space[3] * 3}px;
`;

export const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${p => p.theme.borders.normal};
  padding: ${p => p.theme.space[4]}px 40px;

  @media screen and (min-width: 480px) {
    padding: ${p => p.theme.space[4]}px 80px;
  }

  @media screen and (min-width: 768px) {
    padding: ${p => p.theme.space[4]}px 100px;
  }
  
  @media screen and (min-width: 1200px) {
    padding: ${p => p.theme.space[4]}px 180px;
  }
  
`;

export const StyledError = styled('span')`
  position: absolute;
  top: 105%;
  left: 5px;
  width: 600px;
  text-align: left;
  color: ${p => p.theme.colors.red};
`;

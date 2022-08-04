import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }

  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.2),
      rgba(47, 48, 58, 0.2)
    ),
    url(${p => p.svg});
  background-color: #b1aeae89;
`;

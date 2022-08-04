import styled from 'styled-components';
import Ukraine from '../../images/ukraine.svg';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.overlay};
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  border-radius: ${p => p.theme.radii.normal};
  padding: ${p => p.theme.space[4] + 4}px;
  background-color: ${p => p.theme.colors.white};
  background-image: url(${Ukraine});
  background-repeat: no-repeat;
  background-size: cover;
`;

import styled from 'styled-components';
import { color } from '../styles/color';

export const Title = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 5vw;
  font-weight: 600;
  color: ${color.ICE_BLUE};
  margin: 0;
`;

export const Subtitle = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3vw;
  font-weight: 400;
  color: ${color.ICE_BLUE};
  margin: 0;
`;

export const Label = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2vw;
  font-weight: 400;
  color: ${color.ICE_BLUE};
  margin: 0;
`;

export const Paragraph = styled.p`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5vw;
  font-weight: 300;
  color: ${color.ICE_BLUE};
  margin: 1vw 0;
`;

export const Error = styled(Paragraph)`
  color: ${color.RED}
`;
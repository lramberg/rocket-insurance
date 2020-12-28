import styled from 'styled-components';
import { color } from '../styles/color';
import { media } from '../styles/breakpoints';

export const Title = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 5vw;
  font-weight: 600;
  color: ${color.ICE_BLUE};
  margin: 0;

  @media ${media.mobile} {
    font-size: 10vw;
    text-align: center;
  }
`;

export const Subtitle = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3vw;
  font-weight: 400;
  color: ${color.ICE_BLUE};
  margin-top: 4vw;

  @media ${media.mobile} {
    font-size: 8vw;
    text-align: center;
    margin-top: 3vw;
  }
`;

export const Label = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2vw;
  font-weight: 400;
  color: ${color.ICE_BLUE};
  margin: 0;

  @media ${media.mobile} {
    font-size: 6vw;
  }
`;

export const Paragraph = styled.p`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5vw;
  font-weight: 300;
  color: ${color.ICE_BLUE};
  margin: 1vw 0;

  @media ${media.mobile} {
    font-size: 5vw;
    margin-top: 3vw;
  }
`;

export const Description = styled(Paragraph)`
  width: 50%;

  @media ${media.mobile} {
    font-size: 4vw;
    width: 100%;
  }
`;

export const Error = styled(Paragraph)`
  height: 1vw;
  font-size: 1vw;
  color: ${color.RED};
  margin: 0 0 1vw;

  @media ${media.mobile} {
    height: 3vw;
    font-size: 3vw;
  }
`;
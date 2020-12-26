import styled from 'styled-components';
import { media } from './breakpoints';
const height = window.innerHeight;

export const Container = styled.div`
  padding: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: ${height}px;
`;

export const LandingPageContainer = styled(Container)`
  background: linear-gradient(rgba(13, 2, 26, 0.7) 40%, rgba(33, 23, 66, 0.7), rgba(63, 46, 120, 0.7));
`;

export const Form = styled.div`
  margin-top: 3vw;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1vw 3vw;

  @media ${media.mobile} {
    width: 90%;
    margin-top: 6vw;
  }
`;

export const QuoteForm = styled(Form)`
  margin-top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.5);

  @media ${media.mobile} {
    margin-top: 5vw;
    align-items: flex-start;
    background-color: transparent;
    box-shadow: none;
  }
`;

export const Section = styled.div`
  margin: 3vw 0 1vw;

  @media ${media.mobile} {
    margin: 10vw 0 3vw;
  }
`;

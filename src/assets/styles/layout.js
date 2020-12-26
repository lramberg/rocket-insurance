import styled from 'styled-components';
import { media } from './breakpoints';

export const Container = styled.div`
  padding: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  margin-top: 3vw;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.3);
  padding: 1vw 3vw;

  @media ${media.mobile} {
    width: 90%;
    margin-top: 6vw;
  }
`;

export const QuoteForm = styled(Form)`
  margin-top: 0;

  @media ${media.mobile} {
    margin-top: 5vw;
    align-items: flex-start;
  }
`;

export const Section = styled.div`
  margin-top: 3vw;

  @media ${media.mobile} {
    margin-top: 10vw;
  }
`;

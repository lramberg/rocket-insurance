import styled from 'styled-components';
import { color } from './color';
import { media } from './breakpoints';

export const Container = styled.div`
  background-color: ${color.DEEP_PURPLE};
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

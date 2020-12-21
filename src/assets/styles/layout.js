import styled from 'styled-components';
import { color } from './color';

export const Container = styled.div`
  background-color: ${color.DEEP_PURPLE};
  padding: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  margin-top: 5vw;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuoteForm = styled(Form)`
  margin-top: 0;
`;

export const Section = styled.div`
  margin-top: 3vw;
`;

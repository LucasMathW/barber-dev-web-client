import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  border-radius: 10px;
  border: 0px;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  color: #312e38;
  margin-top: 16px;
  font-weight: 500;
  transition: all 0.2s ease-out;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;

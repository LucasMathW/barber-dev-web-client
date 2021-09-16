import styled, { css } from 'styled-components';

interface containerProps {
  isFocused: boolean;
}

export const Container = styled.div<containerProps>`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  flex: 1;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  input {
    background: transparent;
    border: 0;
    color: #f4ede8;
    flex: 1;
    width: 100%;

    &::placeholder {
      color: #666350;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

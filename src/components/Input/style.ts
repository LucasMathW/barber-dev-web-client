import styled, { css } from 'styled-components';

interface containerProps {
  isFocused: boolean;
}

export const Container = styled.div<containerProps>`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 304px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + div {
    margin-top: 16px;
  }

  ${(props) => props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #f4edd8;

    &::placeholder {
      color: #666350;
    }

    & + input {
      margin-top: 8px;
    }
  }

  svg {
    margin-right: 16px;
    color: #666350;
  }
`;

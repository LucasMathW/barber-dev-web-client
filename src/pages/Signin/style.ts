import styled from 'styled-components';
import { shade } from 'polished';
import signInBackground from '../../assets/img/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4edd8;
      margin-top: 24px;
      display: block;
      text-decoration: none;
      transition: all color 0.2s ease-out;

      &:hover {
        color: ${(shade(0.2), '#f4edd8')};
      }
    }
  }

  > a {
    color: #f4edd8;
    margin-top: 24px;
    display: block;
    text-decoration: none;
    transition: all 0.2s ease-out;
    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${(shade(0.2), '#f4ede8')};
    }

    svg {
      margin-left: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;

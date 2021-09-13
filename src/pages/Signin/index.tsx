import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Container, Content, Background } from './style';
import logoImg from '../../assets/img/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

const Signin: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu Logon</h1>
        <Input icon={FiMail} name="email" placeholder="E-mail" />
        <Input
          icon={FiLock}
          name="password"
          placeholder="Senha"
          type="password"
        />
        <Button type="submit">Entrar</Button>
        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a className="create-acount" href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default Signin;

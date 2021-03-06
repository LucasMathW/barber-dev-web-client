/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
// eslint-disable-next-line prettier/prettier
import {
  FiArrowLeft, FiMail, FiLock, FiUser,
} from 'react-icons/fi';

import { Form } from '@unform/web';
import { Container, Content, Background } from './style';
import logoImg from '../../assets/img/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function handleSubmit(data: object): void {
    // console.log('DATA:', data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            placeholder="Senha"
            type="password"
          />
          <Button type="submit">Entrar</Button>
        </Form>

        <a className="create-acount" href="login">
          <FiArrowLeft />
          Voltar para logOn
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;

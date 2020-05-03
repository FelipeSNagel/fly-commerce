import React, { useRef } from 'react';

import Background from '../../components/Background';
import Input from '../../components/Input';
import Button from '../../components/Button';
import LogoInitial from '../../components/LogoInitial';

import { Container, Title, SignLink, SignText } from './styles';

export default function SignIn({ navigation }) {

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleSubmit(){
    console.log('teste');
  }

  return (
    <Background>
      <Container>

        <LogoInitial />

        <Title>CRIAR CONTA</Title>


        <Input
          ref={usernameRef}
          placeholder="Digite seu Nome"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
        />

        <Input
          ref={emailRef}
          placeholder="Digite seu E-mail"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />

        <Input
          ref={passwordRef}
          placeholder="Digite sua Senha"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />

        <Button onPress={handleSubmit}>Registrar</Button>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignText>Já possui Conta?</SignText>
        </SignLink>

      </Container>
    </Background>
  );
}

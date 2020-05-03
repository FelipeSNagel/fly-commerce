import React, { useRef } from 'react';

import Background from '../../components/Background';
import Input from '../../components/Input';
import Button from '../../components/Button';
import LogoInitial from '../../components/LogoInitial';

import { Container, Title, SignLink, SignText } from './styles';

export default function SignIn({ navigation }) {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  function handleSubmit(){
    console.log(usernameRef.current);
  }

  return (
    <Background>
      <Container>

        <LogoInitial />

        <Title>AUTENTICAR</Title>

        <Input
          ref={usernameRef}
          placeholder="USUÁRIO"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />

        <Input
          ref={passwordRef}
          secureTextEntry
          placeholder="SENHA"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />

        <Button onPress={() => handleSubmit()}>CONECTAR</Button>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignText>Criar Conta</SignText>
        </SignLink>

      </Container>
    </Background>
  );
}

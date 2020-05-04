import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '../../store/modules/auth/actions';

import Background from '../../components/Background';
import Input from '../../components/Input';
import Button from '../../components/Button';
import LogoInitial from '../../components/LogoInitial';

import { Container, Title, SignLink, SignText } from './styles';

export default function SignIn({ navigation }) {

  const distpatch = useDispatch();

  const passwordRef = useRef(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);


  function handleSubmit(){
    distpatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>

        <LogoInitial />

        <Title>AUTENTICAR</Title>

        <Input
          placeholder="E-MAIL"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChange={(value) => setEmail(value)}
          />

        <Input
          ref={passwordRef}
          secureTextEntry
          placeholder="SENHA"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={password}
          onChange={(value) => setPassword(value)}
        />

        <Button loading={loading} onPress={() => handleSubmit()}>CONECTAR</Button>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignText>Criar Conta</SignText>
        </SignLink>

      </Container>
    </Background>
  );
}

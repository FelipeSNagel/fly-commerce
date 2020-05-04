import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SignUpRequest } from '../../store/modules/auth/actions';

import Background from '../../components/Background';
import Button from '../../components/Button';
import LogoInitial from '../../components/LogoInitial';

import { Container, Title, SignLink, SignText, Input } from './styles';

export default function SignIn({ navigation }) {

  const dispatch = useDispatch();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [ user, setUser ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const loading = useSelector(state => state.auth.loading);


  function handleSubmit(){
    dispatch(SignUpRequest(user, email, password));
  }

  return (
    <Background>
      <Container>

        <LogoInitial />

        <Title>CRIAR CONTA</Title>


        <Input
          placeholder="Digite seu Nome"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          value={user}
          onChangeText={value => setUser(value)}
        />

        <Input
          ref={emailRef}
          placeholder="Digite seu E-mail"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={value => setEmail(value)}
        />

        <Input
          ref={passwordRef}
          placeholder="Digite sua Senha"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={value => setPassword(value)}
        />

        <Button loading={loading} onPress={handleSubmit}>Registrar</Button>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignText>Já possui Conta?</SignText>
        </SignLink>

      </Container>
    </Background>
  );
}

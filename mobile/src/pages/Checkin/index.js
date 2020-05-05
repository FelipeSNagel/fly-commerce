import React, { useEffect, useState, useRef } from 'react';

import { currencyFormat } from '../../utils/format';

import Background from '../../components/Background';
import Header from '../../components/Header';
import ButtonGradient from '../../components/ButtonGradient';

import { Input } from './styles';

export default function Checkin({ navigation }) {

  const numberRef = useRef(null);
  const dateRef = useRef(null);
  const codeRef = useRef(null);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [code, setCode] = useState('');

  function handleSubmit() {

  }

  return <Background>
    <Header title="Finalizar Compra" navigation={navigation} />

    <Input
      type="text"
      placeholder="NOME NO CARTÃO"
      returnKeyType="next"
      onSubmitEditing={() => numberRef.current.focus()}
      value={name}
      onChangeText={(value) => setName(value)}
    />

    <Input
      type="text"
      placeholder="NÚMERO DO CARTÃO"
      returnKeyType="next"
      onSubmitEditing={() => dateRef.current.focus()}
      ref={numberRef}
      value={number}
      onChangeText={(value) => setNumber(value)}
    />

    <Input
      type="text"
      placeholder="MÊS/ANO"
      returnKeyType="next"
      onSubmitEditing={() => codeRef.current.focus()}
      ref={dateRef}
      value={date}
      onChangeText={(value) => setDate(value)}
    />

    <Input
      type="text"
      placeholder="COD."
      returnKeyType="next"
      ref={codeRef}
      onSubmitEditing={() => handleSubmit()}
      value={code}
      onChangeText={(value) => setCode(value)}
    />

    <ButtonGradient onPress={() => navigation.navigate('Maps')}>Finalizar</ButtonGradient>

  </Background>
}

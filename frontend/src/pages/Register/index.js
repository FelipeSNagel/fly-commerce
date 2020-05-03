import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import NumberFormat from 'react-number-format';
import { FiArrowLeft } from 'react-icons/fi';

import { toast } from 'react-toastify';
import { ClapSpinner } from 'react-spinners-kit';
import AvatarInput from '~/components/AvatarInput';

import {
  Container,
  Section,
  Text,
  Description,
  ContainerChildren,
  GroupInput,
  Loading,
} from './styles';

import api from '../../services/api';
import cepApi from '~/services/cep';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório!'),
  lastName: Yup.string().required('Nome é obrigatório!'),
  email: Yup.string()
    .email('Formato invalido!')
    .required('Email é obrigatório!'),
  whatsapp: Yup.string().required(),
  street: Yup.string().required('Rua é obrigatório!'),
  number: Yup.string().required('Número é obrigatório!'),
  complements: Yup.string(),
  city: Yup.string().required('Cidade é obrigatório!'),
  state: Yup.string().required('Estado é obrigatório!'),
  cep: Yup.string()
    .required('CEP é obrigatório!')
    .length(8, 'Tem que ter 8 digitos!'),
});

export default function Register() {
  const [whatsapp, setWhatsapp] = useState('');
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [complements, setComplements] = useState('');

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  async function blurZipeCode() {
    try {
      if (cep.length !== 0 && cep.length === 8) {
        setLoading(true);
        const resp = await cepApi.get(`${cep}/json`);

        if (resp.status === 200 && !resp.data.erro) {
          const data = {
            street: `${resp.data.logradouro} - ${resp.data.bairro}`,
            city: resp.data.localidade,
            state: resp.data.uf,
            complements: resp.data.complemento,
          };
          setStreet(data.street);
          setState(data.state);
          setCity(data.city);
          setComplements(data.complements);
        } else toast.warn('CEP não encontrado!');

        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error('Erro ao buscar CEP!');
      setLoading(false);
    }
  }

  async function handleRegister({ name, lastName, email, city, uf }) {
    const format = whatsapp.replace(/[^a-zA-Z0-9]/g, '');

    const data = { name, lastName, email, whatsapp: format, city, uf };
    console.log(data);

    try {
      //const resp = await api.post('/users', data);
      history.push('/');
    } catch (errors) {
      console.log(errors);
    }
  }

  return (
    <Container>
      <ContainerChildren>
        <Section>
          <Text>Cadastro</Text>
          <Description>
            Faça seu cadastro, entre e faça parte da maior plataforma de vendas.
          </Description>
          <Link className="link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para o inicio
          </Link>
        </Section>
        {!loading && (
          <Form onSubmit={handleRegister} schema={schema}>
            <AvatarInput name="avatar_id" />
            <GroupInput>
              <Input placeholder="Primeiro nome" name="name" />
              <Input placeholder="Ultimo nome" name="lastName" />
            </GroupInput>
            <Input type="email" placeholder="E-mail" name="email" />
            <NumberFormat
              placeholder="WhatsApp"
              name="whatapp"
              value={whatsapp}
              mask="_"
              format="(##)# ####-####"
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            <Input
              name="cep"
              placeholder="CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value.replace(/[^0-9]/g, ''))}
              onBlur={blurZipeCode}
              maxLength={8}
            />
            <Input
              id="street"
              name="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder="Endereço"
            />
            <GroupInput>
              <Input
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Cidade"
              />
              <Input
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Estado"
              />
            </GroupInput>
            <GroupInput>
              <Input
                name="complements"
                value={complements}
                onChange={(e) => setComplements(e.target.value)}
                placeholder="Complemento"
              />
              <Input
                className="number"
                name="number"
                value={number}
                onChange={(e) =>
                  setNumber(e.target.value.replace(/[^0-9]/g, ''))
                }
                placeholder="Numero"
              />
            </GroupInput>
            <button className="button" type="submit">
              Cadastrar
            </button>
          </Form>
        )}
        <Loading load={loading}>
          <ClapSpinner
            loading={loading}
            size={45}
            frontColor="#7159c1"
            backColor="#686769"
          />
        </Loading>
      </ContainerChildren>
    </Container>
  );
}

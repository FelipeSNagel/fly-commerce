import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container, ContainerChildren, Imgs, Infos } from './styles';
import { Button } from 'react-bootstrap';

export default function ProductCreate() {
  return (
    <Container>
      <h3>INFORMAÇÕES DO PRODUTO</h3>
      <ContainerChildren>
        <Form>
          <strong>Foto principal</strong>

          <Imgs>
            <img
              src="https://pngimage.net/wp-content/uploads/2018/05/add-image-png-2.png"
              alt="img"
            />
            <img
              src="https://pngimage.net/wp-content/uploads/2018/05/add-image-png-2.png"
              alt="img"
            />
          </Imgs>

          <strong>Informações</strong>

          <Infos>
            <p>
              Nome do Produto <br /> <Input name="name" />
            </p>
            <p>
              Departamento <br /> <Input name="departamento" />
            </p>
            <p>
              Categoria <br /> <Input name="categoria" />
            </p>
            <p>
              Descrição <br /> <Input name="descricao" />
            </p>
            <p>
              Cores <br /> <Input name="cores" />
            </p>
            <div>
              <p>
                Dimensões <br /> <Input name="dimensao" />
              </p>
              <p>
                Peso <br /> <Input name="peso" />
              </p>
            </div>
            <div>
              <p>
                Preço <br /> <Input name="preco" />
              </p>
              <p>
                Quantidade <br /> <Input name="qtd" />
              </p>
            </div>
          </Infos>
          <Button>REGISTRAR</Button>
        </Form>
      </ContainerChildren>
    </Container>
  );
}

import React, { useState } from 'react';

import { Container, ContainerChildren } from './styles';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

import Products from './Products';

function Profile() {
  const [products, setProducts] = useState(true);

  const changeView = (e) => {
    var value = e === 'products';

    setProducts(value);
  };

  return (
    <Container>
      <ContainerChildren>
        <div className="top">
          <h2>Bem Vindo</h2>
          <h2>10 Conto</h2>
          <br />
          <img
            src="https://abrilexame.files.wordpress.com/2018/10/8dicas1.jpg?quality=70&strip=info&w=352&h=352"
            alt="avatar"
            width={150}
          />
        </div>
        <div>
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton value={1} onClick={(e) => changeView('products')}>
              SEUS PRODUTOS
            </ToggleButton>
            <ToggleButton value={2} onClick={(e) => changeView('analytics')}>
              ANALYTICS
            </ToggleButton>
          </ToggleButtonGroup>
          {products ? <Products /> : ''}
        </div>
      </ContainerChildren>
    </Container>
  );
}

export default Profile;

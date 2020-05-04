import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  padding: 50px;

  .product {
    display: flex;

    padding: 20px;
    margin-top: 25px;
    background: ${({ theme }) => theme.background};
    border-radius: 8px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 100px;
  }
`;

export const Imgs = styled.div`
  display: flex;

  img {
    width: 250px;
  }

  div {
    display: grid;
    margin-right: 25px;

    img {
      width: 60px;
      height: 60px;
    }
  }
`;

export const Infos = styled.div`
  display: grid;
  width: 100%;
  margin-left: 25px;

  p {
    font-weight: bold;
  }

  h5 {
    margin-top: 15px;
  }

  button {
    background: ${({ theme }) => theme.button};
    border-color: ${({ theme }) => theme.button};
    justify-self: flex-end;
    font-weight: bold;
    margin-right: 25px;

    &:hover {
      color: #000;
      border-color: ${darken(0.1, '#00E6FF')};
      background: ${darken(0.1, '#00E6FF')};
    }
  }
`;

export const OtherProducts = styled.div`
  margin-top: 35px;
`;

export const ListProdutos = styled.ul`
  margin-top: 35px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
`;

export const Produtos = styled.li`
  display: grid;
  justify-items: center;

  img {
    width: 150px;
  }

  strong {
    font-size: 16px;
  }
`;

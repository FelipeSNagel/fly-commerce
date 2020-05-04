import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin-top: 20px;
  padding: 50px;
`;

export const ListStock = styled.ul`
  border-radius: 8px;
`;

export const Stock = styled.li`
  display: flex;
  border-radius: 8px;
  background: ${({ theme }) => theme.background};
  margin-bottom: 15px;

  img {
    width: 250px;
  }

  div {
    display: grid;
    align-self: center;
    width: 800px;
    margin-left: 15px;
    margin-right: 15px;

    h5 {
      font-size: 18px;
    }

    strong {
      color: red;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
    justify-self: flex-end;
    text-decoration: none;

    margin-right: 15px;
    background: ${({ theme }) => theme.button};
    border-color: ${({ theme }) => theme.button};
    border-radius: 8px;

    font-size: 18px;
    font-weight: bold;

    width: 150px;
    height: 50px;

    &:hover {
      color: #000;
      border-color: ${darken(0.1, '#00E6FF')};
      background: ${darken(0.1, '#00E6FF')};
    }
  }
`;

import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 50px;
  display: grid;
  justify-items: center;
`;

export const ContainerChildren = styled.div`
  background: ${({ theme }) => theme.background};
  border-radius: 8px;
  margin-top: 30px;
  width: 70%;

  strong {
    margin: 15px;
  }
  form {
    display: grid;
    padding: 25px;

    p {
      width: 100%;
      input {
        width: 100%;
        height: 35px;
        font-size: 18px;
      }
    }

    button {
      justify-self: center;
      background: ${({ theme }) => theme.button};
      border-color: ${({ theme }) => theme.button};
      font-weight: bold;

      &:hover {
        color: #000;
        border-color: ${darken(0.1, '#00E6FF')};
        background: ${darken(0.1, '#00E6FF')};
      }
    }
  }
`;

export const Imgs = styled.div`
  padding: 20px;

  img {
    width: 100px;
    height: 100px;
    background: #fff;

    margin-right: 10px;
  }
`;

export const Infos = styled.div`
  width: 100%;
  margin-top: 15px;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

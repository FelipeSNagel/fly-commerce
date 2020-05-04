import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px;
  border: 2px solid ${({ theme }) => theme.text};
  background: #fff;

  div {
    display: flex;
    justify-content: center;
    justify-items: center;

    a {
      background: #000;
      text-decoration: none;
      padding: 10px;
      color: #fff;
      border-radius: 6px;
    }
  }
`;

export const ListStock = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-gap: 25px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Stock = styled.li`
  background: #eee;
  width: 50%;

  img {
    width: 100%;
  }

  div {
    display: grid;
    padding: 15px;
    border-radius: 8px;

    p,
    span {
      color: #000;
    }

    p {
      font-weight: bold;
    }
  }
`;

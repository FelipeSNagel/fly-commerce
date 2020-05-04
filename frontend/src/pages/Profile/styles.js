import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const ContainerChildren = styled.div`
  width: 90%;
  padding: 25px;
  background: ${({ theme }) => theme.background};
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  .top {
    display: grid;
    justify-content: center;
    margin-bottom: 35px;
    text-align: center;
  }

  .btn-group {
    > label {
      margin-right: 20px;
    }
  }

  span {
    display: block;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

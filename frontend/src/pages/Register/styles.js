import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 80vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1150px) {
    padding: 10px;
  }
  @media screen and (max-width: 750px) {
    display: block;
  }
`;

export const ContainerChildren = styled.div`
  width: 90%;
  padding: 25px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: block;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;

  .link {
    transition: all 0.2s ease;
    text-decoration: none;
  }

  .link svg {
    margin-right: 8px;
  }

  .link:hover {
    transform: scale(1.05, 1.05);
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 650px;

  @media screen and (max-width: 820px) {
    input {
      font: 400 16px Roboto, sans-serif;
      padding: 0 10px;
    }
  }

  @media screen and (max-width: 750px) {
    font: 400 18px Roboto, sans-serif;
    padding: 0 12px;
  }
`;

export const Text = styled.h1`
  font-size: 32px;
  margin: 50px 0 32px;
  color: #000;

  @media screen and (max-width: 750px) {
    margin: 0;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: #737380;
  line-height: 30px;
  padding: 5px;
`;

export const GroupInput = styled.div`
  display: flex;

  .number {
    width: 25%;
  }
`;

export const Loading = styled.div`
  width: 100%;
  display: ${(props) => (props.load ? 'flex' : 'contents')};
  justify-content: center;
`;

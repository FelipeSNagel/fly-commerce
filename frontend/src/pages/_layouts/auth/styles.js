import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: '#00E6FF';
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;

  div {
    form {
      display: flex;
      flex-direction: column;

      strong {
        text-align: start;
        margin-bottom: 5px;
      }

      input {
        border: 1px solid rgba(0, 0, 0, 0.2);
        height: 44px;
        width: 100%;
        color: #333;
        border-radius: 4px;
        padding: 0 15px;
        margin: 0 0 10px;

        &::placeholder {
          color: rgba(0, 0, 0, 0.5);
        }
      }

      span {
        color: red;
        align-self: flex-start;
        margin: 0 0 10px;
        font-weight: bold;
      }

      button {
        margin: 5px 0 0;
        height: 44px;
        background: ${({ theme }) => theme.button};
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s ease;

        &:hover {
          background: ${darken(0.03, '#00E6FF')};
        }
      }
    }
  }
`;

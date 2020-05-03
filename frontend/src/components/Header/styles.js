import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 100%;

  img {
    padding-right: 20px;
    border-right: 1px solid #eee;
  }

  .navbar-nav {
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  .navbar-collapse {
  }

  .navbar {
    border-radius: 4px;
  }

  a {
    font-weight: bold;
    margin-right: 15px;
    text-decoration: none;
    color: ${({ theme }) => theme.textHeader};

    &:hover {
      color: ${lighten(0.1, '#7159c1')};
    }
  }

  @media (max-width: 992px) {
    .nav-item {
      margin-top: 10px;
    }
  }
`;

export const ToggleContainer = styled.button`
  display: flex;
  position: relative;
  justify-content: space-between;
  background: ${({ theme }) => theme.gradient};
  width: 5rem;
  height: 2.5rem;
  margin: 0 auto;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  font-size: 0.5rem;
  padding: 0.2rem;
  overflow: hidden;
  margin-right: 20px;
  margin-top: 10%;

  svg {
    width: 2rem;
    height: auto;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }

  @media (max-width: 992px) {
    display: initial;
    margin: 10px 0 10px;
  }
`;

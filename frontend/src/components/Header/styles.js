import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 100%;

  .avatar {
    border-left: 1px solid ${({ theme }) => theme.active};
    border-right: 1px solid ${({ theme }) => theme.active};
    transition: all 0.2 ease;

    svg {
      margin-left: 5px;
      padding-right: 5px;
    }

    margin-right: 5px;
  }

  .form-inline {
    justify-content: center;

    svg {
      position: absolute;
      left: calc(50% - -80px);
      color: rgba(0, 0, 0, 0.3);
    }
  }

  .form-control {
    width: 100%;
  }

  .navbar-nav {
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  .navbar-collapse {
    justify-content: flex-end;
  }

  .navbar {
    border-radius: 4px;
    display: grid;
    grid-template-columns: 250px repeat(2, 1fr);
    grid-gap: 20px;
  }

  a {
    margin-right: 15px;
    text-decoration: none;
    color: ${({ theme }) => theme.active};

    &:hover {
      color: ${lighten(0.1, '#000')};
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
  margin-left: 10px;

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

export const HeaderSec = styled.div`
  background: ${({ theme }) => theme.background};
  font-weight: bold;

  div {
    align-items: center;
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

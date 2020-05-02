import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 46px;
  border-radius: 23px;
  border: 1px solid #FFF;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
`;

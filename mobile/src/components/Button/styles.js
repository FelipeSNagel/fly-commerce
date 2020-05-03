import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 48px;
  padding: 0 15px;
  border-radius: 24px;
  border: 1px solid #FFF;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #00E6FF;
  font-weight: bold;
  font-size: 20px;
  font-weight: 300;
`;

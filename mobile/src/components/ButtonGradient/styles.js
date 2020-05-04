import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Gradient = styled(LinearGradient).attrs({
  colors: ['#324a8a', '#318eae']
})`
  height: 48px;
  padding: 0 30px;
  border-radius: 24px;
  margin: 15px auto 30px auto;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: 300;
  color: #FFF;
`;



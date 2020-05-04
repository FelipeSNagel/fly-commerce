import styled from 'styled-components/native';
import { Platform } from 'react-native';
import InputT from '../../components/Input';


export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  height: 100%;
  width: 100%;
  padding: 15px 45px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  color: #00E6FF;
  margin-bottom: 35px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 25px;
`;

export const SignText = styled.Text`
  color: #00E6FF;
  font-size: 12px;
  font-weight: 300;
`;

export const Input = styled(InputT)`
  margin-bottom: 25px;
`;

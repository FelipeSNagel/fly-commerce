import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 44px;
  border-radius: 14px;
  border: 1px solid #FFF;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#00E6FF',
})`
  flex: 1;
  font-size: 20px;
  font-weight: 300;
  margin-left: 10px;
  color: #00E6FF;
  text-align: center;
`;

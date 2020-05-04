import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 15px 0 15px;
  padding-top: 10px;
  border-top-width: 1px;
  border-top-color: #4A4A4A;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 110px;
  height: 110px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 10px;
`;

export const Title = styled.Text`
  font-size: 11px;
  line-height: 14px;
  font-weight: 400;
  color: #FFF;
  margin-bottom: 5px;
`;

export const Price = styled.Text`
  font-size: 11px;
  line-height: 14px;
  font-weight: 400;
  color: #FFF;
  margin-bottom: 5px;
`;

export const Description = styled.Text`
  font-size: 11px;
  line-height: 12px;
  font-weight: 400;
  color: #FFF;
`;

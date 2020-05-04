import styled from 'styled-components/native';

export const Content = styled.ScrollView`
  padding: 15px;
`;

export const Image = styled.Image`
  height: 290px;
  width: 290px;
  margin: 0 auto 15px auto;
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-size:20px;
  font-weight: 400;
  line-height: 20px;
  color: #FFF;
  text-align: center;

  margin-bottom: 15px;
  width: 100%;
`;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #FFF;
  text-align: center;
`;

export const LinePrice = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #00E6FF;
  width: 120px;
  margin: 10px auto;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #FFF;
  text-align: center;
  margin-bottom: 20px;
`;

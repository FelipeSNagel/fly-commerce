import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { RectButton } from 'react-native-gesture-handler';
import logo from '../../assets/logo.png';
import { Platform } from 'react-native';

export const Wrapper = styled.SafeAreaView`
  background: ${colors.dark};
  flex-direction: row;
  margin-top: ${Platform.OS === 'ios' ? '20px' : '0'};
  border-bottom-width: 1px;
  border-bottom-color: #4A4A4A;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 210px;
  height: 24px;
  margin-top: 5px;
`;

export const BasketContainer = styled(RectButton)`
  height: 32px;
  width: 32px;
  align-items: flex-end;
  justify-content: flex-end;
  padding-top: 8px;
  padding-right: 8px;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: 0;
  right: 0;
  min-width: 18px;
  min-height: 18px;
  background: ${colors.primary};
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;

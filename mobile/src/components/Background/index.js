import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components';

export default styled(LinearGradient).attrs({
  colors: ['#17171f', '#333'],
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

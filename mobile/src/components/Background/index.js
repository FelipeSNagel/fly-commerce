import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components';

export default styled(LinearGradient).attrs({
  colors: ['#00E6FF', '#17171f', '#17171f'],
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

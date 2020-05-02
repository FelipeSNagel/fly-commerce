import React, { forwardRef } from 'react';
import { Container, TInput } from './styles';

import { MaterialIcons as Icon} from '@expo/vector-icons';

function Input({style, icon, ...rest}, ref) {
  return (
    <Container style={style}>
      <TInput {...rest} ref={ref}/>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255, 0.3)" /> }
    </Container>
  );
}

export default forwardRef(Input);

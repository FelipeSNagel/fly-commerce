import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Gradient, Text } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ButtonGradient({ children, loading, ...rest }) {
  return (
    <TouchableOpacity {...rest}>
      <Gradient>
        {
          loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
              <Text>{children}</Text>
            )
        }
      </Gradient>
    </TouchableOpacity>
  );
}

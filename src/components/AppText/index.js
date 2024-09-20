import React, { forwardRef } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

/**
 *
 * @type {React.FC<import('react-native').TextProps>}
 * @returns {React.ReactNode}
 */
export const AppText = forwardRef(({ style, ...props }, ref) => {
  return (
    <Text
      ref={ref}
      style={[styles.baseTextStyles, style ]}
      {...props}
    />
  );
});

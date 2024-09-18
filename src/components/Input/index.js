import React, { forwardRef, useState } from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';

/**
 *
 * @type {React.FC<import('react-native').TextInputProps>}
 * @returns {React.ReactNode}
 */
export const Input = forwardRef((props, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      ref={ref}
      style={[styles.input, isFocused && styles.inputFocus]}
      placeholderTextColor="#aaa"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  );
});

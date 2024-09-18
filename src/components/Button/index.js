import React from 'react';

import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

/**
 *
 * @param {import('react-native').PressableProps} param0
 * @returns
 */
export function Button({ children, disabled = false, style, ...props }) {
  return (
    <View style={styles.buttonWrapper}>
      <Pressable
        disabled={disabled}
        android_ripple={{ color: '#444' }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonActive,
          disabled && styles.buttonDisabled,
          style,
        ]}
        {...props}
      >
        <Text
          style={[styles.buttonLabel, disabled && styles.buttonLabelDisabled]}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
}

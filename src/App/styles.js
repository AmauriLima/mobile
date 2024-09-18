import { Platform, StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: Platform.select({
      android: StatusBar.currentHeight,
    }),
  },
  container: {
    paddingHorizontal: 20,
    gap: 16,
  },
});

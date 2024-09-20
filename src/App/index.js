import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import { AppText } from '../components/AppText';
import { styles } from './styles';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    async function load() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      );

      await new Promise(r => setTimeout(r, 1000));

      const todoObject = await response.json();
      setTodo(todoObject);
      setIsLoading(false);
    }
    load();

  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container} >
        {isLoading && (
          <ActivityIndicator />
        )}

        {todo && (
          <AppText style={{ fontSize: 32 }}>
            {todo.title}
          </AppText>
        )}
      </View>
    </SafeAreaView>
  );
}

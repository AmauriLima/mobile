import React from 'react';
import { InputAccessoryView, SafeAreaView, View } from 'react-native';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { styles } from './styles';


export default function App() {


  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container} >
        <Input placeholder="Nome" inputAccessoryViewID="name" />
        <Input placeholder="Email" inputAccessoryViewID="emailAccessory" />
        <Input placeholder="Idade" />
      </View>

      <InputAccessoryView nativeID="name" >
        <Button>Acessory do Nome</Button>
      </InputAccessoryView>

      <InputAccessoryView nativeID="emailAccessory" >
        <Button>Acessory do Email</Button>
      </InputAccessoryView>
    </SafeAreaView>
  );
}

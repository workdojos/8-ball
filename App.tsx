import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MagicBall from './src/components/MagicBall';

export default function App(): React.JSX.Element {
  const responses : string[] = [
    'Oui, absolument.',
    "C'est certain.",
    'Sans aucun doute.',
    'Très probable.',
    'Oui.',
    'Non.',
    'Très improbable.',
    'Peu probable.',
  ];

  const [answer, setAnswer] = useState('');

  const shakeBall = (): void => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    setAnswer(responses[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <MagicBall answer={answer} />
      <Button title='Shake !!' onPress={shakeBall} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
    padding: 80,
    margin: 20
  }
});
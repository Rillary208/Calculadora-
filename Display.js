import { Text, StyleSheet } from 'react-native';

export default function Display({ expressao }) {
  return (
    <Text style={styles.painel} numberOfLines={1} ellipsizeMode="head">
      {expressao || '0'}
    </Text>
  );
}

const styles = StyleSheet.create({
  painel: {
    width: '100%',
    textAlign: 'right',
    fontSize: 36,
    fontWeight: 'bold',
    backgroundColor: '#ffd6e8',
    borderColor: 'black',
    padding: 10,
    marginBottom: 20
  }
});
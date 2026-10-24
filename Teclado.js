import { View, StyleSheet } from 'react-native';
import Botao from './Botao';

const LINHAS = [
  ['MRC', 'M-', 'M+', 'RAIZ', 'Off'],
  ['AC', 'C', '+/-', '%'],
  ['7', '8', '9', '/'],
  ['4', '5', '6', 'x'],
  ['1', '2', '3', '-'],
  ['0', '.', '=', '+'],
];

export default function Teclado({ onPress }) {
  return (
    <>
      {LINHAS.map((linha, i) => (
        <View key={i} style={styles.colunas}>
          {linha.map((tecla) => (
            <Botao
              key={tecla}
              label={tecla}
              onPress={onPress}
              tipo={i === 0 ? 'memoria' : 'numero'}
            />
          ))}
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  colunas: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '95%',
    gap: 6
  }
});
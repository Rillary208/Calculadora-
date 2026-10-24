import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botao({ label, onPress, tipo }) {
  const ehMemoria = tipo === 'memoria';
  return (
    <TouchableOpacity
      style={ehMemoria ? styles.botao : styles.botaoNumero}
      onPress={() => onPress(label)}
    >
      <Text style={ehMemoria ? styles.textoBotao : styles.textoNumeros}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#f8bbd0',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#d6336c',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '18%'
  },

  botaoNumero: {
    backgroundColor: '#f48fb1',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#d6336c',
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '22%'
  },

  textoBotao: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  textoNumeros: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
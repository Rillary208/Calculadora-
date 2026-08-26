import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

function App(){
  return (

    <View style={styles.container}>

      <StatusBar style = "auto" />

      <Text style={styles.titulo}> Calculadora SocialTech </Text>

      <Text style={styles.painel}>
        0
      </Text>

      <View style={styles.colunas}>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>MRC</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>M-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>M+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>RAIZ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Off</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.colunas}>

        <TouchableOpacity style={styles.botaoNumero}>
          <Text style={styles.textoNumeros}>AC</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNumero}>
          <Text style={styles.textoNumeros}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNumero}>
          <Text style={styles.textoNumeros}>+/-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNumero}>
          <Text style={styles.textoNumeros}>%</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.colunas}>

        <TouchableOpacity style={styles.botaoNumero}>
          <Text style={styles.textoNumeros}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNumero}>
          <Text style={styles.textoNumeros}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNumero}>
          <Text style={styles.textoNumeros}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNumero}>
          <Text style={styles.textoNumeros}>/</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.colunas}>

        <TouchableOpacity style={styles.botaoNumero}>
          <Text style={styles.textoNumeros}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNumero}>
          <Text style={styles.textoNumeros}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNumero}>
          <Text style={styles.textoNumeros}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNumero}>
          <Text style={styles.textoNumeros}>x</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.colunas}>

        <TouchableOpacity style={styles.botaoNumero}>
          <Text style={styles.textoNumeros}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNumero}>
          <Text style={styles.textoNumeros}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNumero}>
          <Text style={styles.textoNumeros}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNumero}>
          <Text style={styles.textoNumeros}>-</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.colunas}>

        <TouchableOpacity style={styles.botaoNumero}>
          <Text style={styles.textoNumeros}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNumero}>
          <Text style={styles.textoNumeros}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNumero}>
          <Text style={styles.textoNumeros}>=</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNumero}>
          <Text style={styles.textoNumeros}>+</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default App;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff0f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 40,
    padding: 0
  },

  titulo: {
    textAlign: 'center',
    backgroundColor: '#d6336c',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    height: 35,
    width: '100%'
  },

  painel: {
    width: '100%',
    textAlign: 'right',
    fontSize: 36,
    fontWeight: 'bold',
    backgroundColor: '#ffd6e8',
    borderColor: 'black',
    padding: 10,
    marginBottom: 20
  },

  colunas: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '95%',
    gap: 6
  },

  botao: {
    backgroundColor: '#f8bbd0',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#d6336c',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width:'18%'
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
    width:'22%'
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
})
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Display from './Display';
import Teclado from './Teclado';
import { calcular } from './calcular';

const OPERADORES = ['+', '-', 'x', '/'];

function App() {
  const [expressao, setExpressao] = useState('');
  const [historico, setHistorico] = useState([]);
  const [memoria, setMemoria] = useState(0);
  const [calculado, setCalculado] = useState(false); // true logo após apertar "="

  // valor numérico atual da expressão (usado por RAIZ, M+ e M-)
  function valorAtual() {
    const v = calcular(expressao);
    return typeof v === 'number' ? v : 0;
  }

  function mostrar(valor) {
    setExpressao(String(valor));
    setCalculado(true);
  }

  function aoTocar(tecla) {
    if (tecla === 'AC' || tecla === 'Off') {
      setExpressao('');
      setCalculado(false);
    } else if (tecla === 'C') {
      setExpressao(expressao === 'Erro' ? '' : expressao.slice(0, -1));
      setCalculado(false);
    } else if (tecla === '=') {
      aoIgual();
    } else if (tecla === '+/-') {
      // inverte o sinal do último número
      const m = expressao.match(/^(.*?)(-?)(\d+\.?\d*|\.\d+)$/);
      if (m) {
        const [, antes, sinal, num] = m;
        setExpressao(antes + (sinal ? '' : '-') + num);
      }
    } else if (tecla === '%') {
      const m = expressao.match(/^(.*?)(\d+\.?\d*|\.\d+)$/);
      if (m) {
        setExpressao(m[1] + String(Number(m[2]) / 100));
      }
    } else if (tecla === 'RAIZ') {
      const v = valorAtual();
      mostrar(v < 0 ? 'Erro' : Number(Math.sqrt(v).toFixed(10)));
    } else if (tecla === 'M+') {
      setMemoria(memoria + valorAtual());
    } else if (tecla === 'M-') {
      setMemoria(memoria - valorAtual());
    } else if (tecla === 'MRC') {
      // 1º toque: mostra a memória; 2º toque seguido (já mostrando): zera
      if (expressao === String(memoria) && memoria !== 0) {
        setMemoria(0);
        setExpressao('');
      } else {
        setExpressao(String(memoria));
      }
      setCalculado(true);
    } else if (OPERADORES.includes(tecla)) {
      if (expressao === 'Erro') return;
      if (expressao === '' && tecla !== '-') return; // não começa com + x /
      const ultimo = expressao.slice(-1);
      if (OPERADORES.includes(ultimo) && expressao.length > 1) {
        setExpressao(expressao.slice(0, -1) + tecla); // troca o operador
      } else if (!OPERADORES.includes(ultimo) || expressao === '') {
        setExpressao(expressao + tecla);
      }
      setCalculado(false); // continua a conta a partir do resultado
    } else {
      // dígito ou ponto
      if (calculado || expressao === 'Erro') {
        setExpressao(tecla === '.' ? '0.' : tecla); // começa conta nova
      } else {
        setExpressao(expressao + tecla);
      }
      setCalculado(false);
    }
  }

  function aoIgual() {
    if (expressao === '' || expressao === 'Erro') return;
    const valor = String(calcular(expressao));
    const item = {
      id: Date.now().toString(),
      conta: expressao,
      resultado: valor,
    };
    setHistorico([item, ...historico]); // array novo, sem push
    setExpressao(valor);
    setCalculado(true);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.titulo}> Calculadora SocialTech </Text>

      <Display expressao={expressao} />

      <Teclado onPress={aoTocar} />

      <View style={styles.cabecalho}>
        <Text style={styles.subtitulo}>Histórico</Text>
        <TouchableOpacity onPress={() => setHistorico([])}>
          <Text style={styles.limpar}>Limpar histórico</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.lista}
        data={historico}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.linha}>
            {item.conta} = {item.resultado}
          </Text>
        )}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhuma conta ainda</Text>}
      />
    </View>
  );
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

  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginTop: 10
  },
  subtitulo: { fontSize: 18, fontWeight: 'bold', color: '#d6336c' },
  limpar: { fontSize: 14, color: '#d6336c', textDecorationLine: 'underline' },
  lista: { width: '95%' },
  linha: { fontSize: 20, padding: 6 },
  vazio: { fontSize: 16, color: '#666', padding: 6 }
});
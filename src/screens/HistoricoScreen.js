import { useState, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { carregar, salvar, limpar } from '../storage/historico';

export default function HistoricoScreen({ navigation }) {
  const [historico, setHistorico] = useState([]);

  // carrega o histórico salvo sempre que a tela abre
  useFocusEffect(
    useCallback(() => {
      carregar().then(setHistorico);
    }, [])
  );

  // Evolução 1: limpar histórico
  async function limparTudo() {
    await limpar();
    setHistorico([]);
  }

  // Evolução 2: excluir uma conta (filter cria um array novo sem o item)
  async function excluir(id) {
    const novo = historico.filter((item) => item.id !== id);
    setHistorico(novo);
    await salvar(novo);
  }

  // Evolução 3: voltar para a calculadora com o resultado da conta
  function reutilizar(item) {
    navigation.popTo('Home', {
      valor: item.resultado,
      selecaoId: `${item.id}-${Date.now()}`,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.subtitulo}>Histórico</Text>
        <TouchableOpacity onPress={limparTudo}>
          <Text style={styles.limpar}>Limpar histórico</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.lista}
        data={historico}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableOpacity style={styles.conta} onPress={() => reutilizar(item)}>
              <Text style={styles.linha}>
                {item.conta} = {item.resultado}
              </Text>
              <Text style={styles.dica}>Toque para reutilizar o resultado</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => excluir(item.id)}>
              <Text style={styles.excluir}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhuma conta ainda</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5',
    alignItems: 'center'
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginTop: 10
  },
  subtitulo: { fontSize: 18, fontWeight: 'bold', color: '#d6336c' },
  limpar: { fontSize: 14, color: '#d6336c', textDecorationLine: 'underline' },
  lista: { width: '95%', marginTop: 6 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f48fb1'
  },
  conta: { flex: 1, paddingVertical: 8 },
  linha: { fontSize: 20 },
  dica: { fontSize: 12, color: '#666' },
  excluir: { fontSize: 14, color: '#d6336c', fontWeight: 'bold', padding: 8 },
  vazio: { fontSize: 16, color: '#666', padding: 6 }
});

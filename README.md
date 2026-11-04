# Calculadora Socialtech

Projeto de calculadora feita em React Native com Expo, para a matéria de Desenvolvimento para Dispositivos Móveis.

O objetivo da atividade foi praticar o posicionamento de componentes em telas mobile, usando View, Text e TouchableOpacity.

## Integrantes

- Ana Gabriela
- Anna Clara
- João Pedro Pierroni
- Rillary Gabrielly

## Tecnologias usadas

- React Native
- Expo
- JavaScript
- React Navigation (native stack)
- AsyncStorage

## Como executar

```bash
npm install
npx expo start
```

Escaneie o QR Code com o Expo Go.

## Estrutura

```
App.js
src/
  components/  Botao.js, Display.js, Teclado.js
  screens/     HomeScreen.js, HistoricoScreen.js
  storage/     historico.js
  utils/       calcular.js
```

## Funcionalidades

- Calculadora com memória (MRC, M+, M-), RAIZ, %, +/-, AC, C e Off, feita com os componentes Botao, Display e Teclado.
- Histórico das contas salvo com AsyncStorage (continua depois de fechar o app).
- Segunda tela **Histórico**, aberta pela calculadora com React Navigation e listada com FlatList.

## Evoluções

1. **Limpar histórico**: remove todas as contas salvas.
2. **Excluir uma conta**: botão "Excluir" em cada item; `filter()` cria uma lista nova sem a conta escolhida e ela é salva.
3. **Reutilizar uma conta**: tocar numa conta volta para a calculadora (`navigation.popTo`) com o resultado no visor.

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

## Evoluções

- Histórico das contas salvo no aparelho e exibido em uma segunda tela.
- **Evolução 1:** botão "Limpar histórico".
- **Evolução 2:** botão "Excluir" para apagar uma conta específica.
- **Evolução 3:** tocar numa conta do histórico leva o resultado de volta para a calculadora.
- Segunda tela **Histórico**, aberta pela calculadora com React Navigation e listada com FlatList.

## Evoluções

1. **Limpar histórico**: remove todas as contas salvas.
2. **Excluir uma conta**: botão "Excluir" em cada item; `filter()` cria uma lista nova sem a conta escolhida e ela é salva.
3. **Reutilizar uma conta**: tocar numa conta volta para a calculadora (`navigation.popTo`) com o resultado no visor.

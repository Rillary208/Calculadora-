export function calcular(expressao) {
  const texto = expressao.replace(/x/g, '*');
  const tokens = texto.match(/\d+\.?\d*|\.\d+|[+\-*/]/g);
  if (!tokens) return 0;

  const itens = [];
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    const anteriorEhOperador = itens.length === 0 || /^[+\-*/]$/.test(itens[itens.length - 1]);
    if ((t === '-' || t === '+') && anteriorEhOperador && tokens[i + 1] !== undefined) {
      itens.push(String(Number(t + '1') * Number(tokens[i + 1])));
      i++;
    } else {
      itens.push(t);
    }
  }

  const soma = [];
  for (let i = 0; i < itens.length; i++) {
    const t = itens[i];
    if (t === '*' || t === '/') {
      const a = Number(soma.pop());
      const b = Number(itens[++i]);
      if (t === '/' && b === 0) return 'Erro';
      soma.push(t === '*' ? a * b : a / b);
    } else {
      soma.push(t);
    }
  }

  let total = Number(soma[0]);
  for (let i = 1; i < soma.length; i += 2) {
    const n = Number(soma[i + 1]);
    if (isNaN(n)) break;
    total = soma[i] === '+' ? total + n : total - n;
  }
  return Number.isFinite(total) ? Number(total.toFixed(10)) : 'Erro';
}
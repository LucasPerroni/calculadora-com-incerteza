function soma(value1, value2) {
  const maior = value1.valor + value1.incerteza + (value2.valor + value2.incerteza)
  const menor = value1.valor - value1.incerteza + (value2.valor - value2.incerteza)

  const valor = value1.valor + value2.valor
  const incerteza = (maior - menor) / 2

  return { valor, incerteza }
}

function subtracao(value1, value2) {
  const maior = value1.valor + value1.incerteza - (value2.valor - value2.incerteza)
  const menor = value1.valor - value1.incerteza - (value2.valor + value2.incerteza)

  const valor = value1.valor - value2.valor
  const incerteza = (maior - menor) / 2

  return { valor, incerteza }
}

function multiplicacao(value1, value2) {
  const maior = (value1.valor + value1.incerteza) * (value2.valor + value2.incerteza)
  const menor = (value1.valor - value1.incerteza) * (value2.valor - value2.incerteza)

  const valor = value1.valor * value2.valor
  const incerteza = (maior - menor) / 2

  return { valor, incerteza }
}

function divisao(value1, value2) {
  const maior = (value1.valor + value1.incerteza) / (value2.valor - value2.incerteza)
  const menor = (value1.valor - value1.incerteza) / (value2.valor + value2.incerteza)

  const valor = value1.valor / value2.valor
  const incerteza = (maior - menor) / 2

  return { valor, incerteza }
}

function potencia(value, expoent) {
  const maior = (value.valor + value.incerteza) ** expoent
  const menor = (value.valor - value.incerteza) ** expoent

  const valor = value.valor ** expoent
  const incerteza = (maior - menor) / 2

  return { valor, incerteza }
}

function raiz(value, expoent) {
  const maior = (value.valor + value.incerteza) ** (1 / expoent)
  const menor = (value.valor - value.incerteza) ** (1 / expoent)

  const valor = value.valor ** (1 / expoent)
  const incerteza = (maior - menor) / 2

  return { valor, incerteza }
}

export const Math = { soma, subtracao, multiplicacao, divisao, potencia, raiz }

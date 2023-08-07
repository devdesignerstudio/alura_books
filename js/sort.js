function ordenaPorPreco(listaDeLivros) {
  const resultado = toggleOrdenaPreco
    ? listaDeLivros.sort((a, b) => a.preco - b.preco)
    : listaDeLivros.sort((a, b) => b.preco - a.preco)
  return resultado
}

function calcularValorTotalPrecoLivros(livros) {
  return livros.reduce((soma, livro) => soma + livro.preco, 0).toFixed(2)
}

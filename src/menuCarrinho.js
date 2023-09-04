function abrirCarrinho() {
  document.getElementById('carrinho').classList.add('right-[0px]')
  document.getElementById('carrinho').classList.remove('right-[-360px]')
}

function fecharCarrinho() {
  document.getElementById('carrinho').classList.remove('right-[0px]')
  document.getElementById('carrinho').classList.add('right-[-360px]')
}

export function inicializarCarrinho() {
  const botaoAbrirCarrinho = document.getElementById('abrir-carrinho')
  const botaoFecharCarrinho = document.getElementById('fechar-carrinho')

  botaoAbrirCarrinho.addEventListener('click', abrirCarrinho)
  botaoFecharCarrinho.addEventListener('click', fecharCarrinho)
}

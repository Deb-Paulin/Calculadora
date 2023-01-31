const teclas = document.querySelector('.teclas')
const botoes = teclas.querySelector('.botao_operacao')

botoes.addEventListener('click', e => {
  if (e.target.matches('button')) {
  }
 })

const botao = e.target
const action = botao.dataset.action

if (!action) {
    console.log('numero operador!')
}

if (
    action === 'adicionar' ||
    action === 'subtrair' ||
    action === 'multiplicar' ||
    action === 'dividir'
  ) {
    console.log('operador!')
  }

  if (action === 'decimal') {
    console.log('operador decimal!')
  }
  
  if (action === 'limpar') {
    console.log('operador limpar!')
  }
  
  if (action === 'calcular') {
    console.log('operador igualar!')
  }




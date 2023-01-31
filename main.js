const calculadora = document.querySelector('.principal');
const botoes = calculadora.querySelector('.teclas_container');

const handleAction = (event) => {
  if (event.target.matches('button')) {
    console.log('botao');
  }

  const botao = event.target;
  const action = botao.dataset.action;

  if (!action) {
    console.log('numero operador!');
  }

  if (
    action === 'adicionar' ||
    action === 'subtrair' ||
    action === 'multiplicar' ||
    action === 'dividir'
  ) {
    console.log('operador!');
  }

  if (action === 'decimal') {
    console.log('operador decimal!');
  }

  if (action === 'limpar') {
    console.log('operador limpar!');
  }

  if (action === 'calcular') {
    console.log('operador igualar!');
  }
};

botoes.addEventListener('click', handleAction);




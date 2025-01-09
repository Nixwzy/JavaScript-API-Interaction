import { solicitar, inserir, atualizar, deletar } from './api.js';
import { solicitarAsync, inserirAsync, atualizarAsync, deletarAsync } from './api-async.js';

let useAsyncAwait = false;

export function configurarEventos() {
  // Definição das variáveis dos botões
  const $botaoGet = document.querySelector('#get');
  const $botaoPost = document.querySelector('#post');
  const $botaoPut = document.querySelector('#put');
  const $botaoDelete = document.querySelector('#delete');
  const $botaoToggle = document.querySelector('#toggle');

  $botaoToggle.addEventListener('click', () => {
    useAsyncAwait = !useAsyncAwait;
    $botaoToggle.innerText = useAsyncAwait
      ? 'Usando async/await'
      : 'Usando then/catch';
    console.log(`Método atual: ${useAsyncAwait ? 'async/await' : 'then/catch'}`);
  });

  // Botão GET
  $botaoGet.addEventListener('click', () => {
    if (useAsyncAwait) {
      solicitarAsync();
    } else {
      solicitar();
    }
  });
  $botaoGet.addEventListener('mouseover', () => {
    $botaoGet.innerText = 'GET';
  });
  $botaoGet.addEventListener('mouseout', () => {
    $botaoGet.innerText = 'Solicitar post';
  });

  // Botão POST
  $botaoPost.addEventListener('click', () => {
    if (useAsyncAwait) {
      inserirAsync();
    } else {
      inserir();
    }
  });
  $botaoPost.addEventListener('mouseover', () => {
    $botaoPost.innerText = 'POST';
  });
  $botaoPost.addEventListener('mouseout', () => {
    $botaoPost.innerText = 'Inserir novo post';
  });

  // Botão PUT
  $botaoPut.addEventListener('click', () => {
    if (useAsyncAwait) {
      atualizarAsync();
    } else {
      atualizar();
    }
  });
  $botaoPut.addEventListener('mouseover', () => {
    $botaoPut.innerText = 'PUT';
  });
  $botaoPut.addEventListener('mouseout', () => {
    $botaoPut.innerText = 'Atualizar post';
  });

  // Botão DELETE
  $botaoDelete.addEventListener('click', () => {
    if (useAsyncAwait) {
      deletarAsync();
    } else {
      deletar();
    }
  });
  $botaoDelete.addEventListener('mouseover', () => {
    $botaoDelete.innerText = 'DELETE';
  });
  $botaoDelete.addEventListener('mouseout', () => {
    $botaoDelete.innerText = 'Deletar post';
  });
}
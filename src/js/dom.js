import { solicitar, inserir, atualizar, deletar } from './api.js';

export function configurarEventos() {
  // Definição das variáveis dos botões
  const $botaoGet = document.querySelector('#get');
  const $botaoPost = document.querySelector('#post');
  const $botaoPut = document.querySelector('#put');
  const $botaoDelete = document.querySelector('#delete');

  // Get Button Interaction / Function
  $botaoGet.addEventListener('click', solicitar);
  $botaoGet.addEventListener('mouseover', () => {
    $botaoGet.innerText = 'GET';
  });
  $botaoGet.addEventListener('mouseout', () => {
    $botaoGet.innerText = 'Solicitar post';
  });

  // Post Button Interaction / Function
  $botaoPost.addEventListener('click', inserir);
  $botaoPost.addEventListener('mouseover', () => {
    $botaoPost.innerText = 'POST';
  });
  $botaoPost.addEventListener('mouseout', () => {
    $botaoPost.innerText = 'Inserir novo post';
  });

  // Put Button Interaction / Function
  $botaoPut.addEventListener('click', atualizar);
  $botaoPut.addEventListener('mouseover', () => {
    $botaoPut.innerText = 'PUT';
  });
  $botaoPut.addEventListener('mouseout', () => {
    $botaoPut.innerText = 'Atualizar post';
  });

  // Delete Button Interaction / Function
  $botaoDelete.addEventListener('click', deletar);
  $botaoDelete.addEventListener('mouseover', () => {
    $botaoDelete.innerText = 'DELETE';
  });
  $botaoDelete.addEventListener('mouseout', () => {
    $botaoDelete.innerText = 'Deletar post';
  });
}

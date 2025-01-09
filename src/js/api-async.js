// Função GET: Solicitar posts usando async/await
export async function solicitarAsync() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error(
          `Erro na requisição GET. Status: ${response.status} - ${response.statusText}`
        );
      }
      const json = await response.json();
      console.log(
        `GET: Requisição bem-sucedida. Obtivemos ${json.length} posts.`
      );
      console.log(json);
    } catch (error) {
      console.log(`Erro na requisição GET: ${error.message}`);
    }
  }
  
  // Função POST: Inserir um novo post usando async/await
  export async function inserirAsync() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'New Title',
          body: 'New Body',
          userId: 2,
        }),
      });
      if (!response.ok) {
        throw new Error(
          `Erro na requisição POST. Status: ${response.status} - ${response.statusText}`
        );
      }
      const json = await response.json();
      console.log(
        `POST: Requisição feita com sucesso. Post criado com ID: ${json.id}`
      );
      console.log(json);
    } catch (error) {
      console.log(`Erro na requisição POST: ${error.message}`);
    }
  }
  
  // Função PUT: Atualizar um post usando async/await
  export async function atualizarAsync() {
    const postId = 1; // ID do post que você quer atualizar
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: postId, // Mantendo o mesmo ID
            title: 'Updated Title',
            body: 'Updated Body',
            userId: 2,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(
          `Erro na requisição PUT. Status: ${response.status} - ${response.statusText}`
        );
      }
      const json = await response.json();
      console.log(`PUT: Post com ID ${postId} atualizado com sucesso.`);
      console.log(json);
    } catch (error) {
      console.log(`Erro na requisição PUT: ${error.message}`);
    }
  }
  
  // Função DELETE: Deletar um post usando async/await
  export async function deletarAsync() {
    const postId = 1; // ID do post que você quer excluir
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) {
        throw new Error(
          `Erro na requisição DELETE. Status: ${response.status} - ${response.statusText}`
        );
      }
      console.log(`DELETE: Post com ID ${postId} deletado com sucesso.`);
    } catch (error) {
      console.log(`Erro na requisição DELETE: ${error.message}`);
    }
  }
  
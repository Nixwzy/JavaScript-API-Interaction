import { configurarEventos } from './dom.js';

configurarEventos();


const requestLogs = [];


function logRequest(code) {
    requestLogs.push(code);
    console.clear();
    console.table(requestLogs);
}

async function getPost() {
    console.log("GET Request: Obtendo posts...");
}

async function insertPost() {
    console.log("POST Request: Inserindo um novo post...");
}

async function updatePost() {
    console.log("PUT Request: Atualizando post...");
}

async function deletePost() {
    console.log("DELETE Request: Deletando post...");
}

async function handleGetRequest() {
    const code = "GET /posts";
    await getPost();
    logRequest(code);
}

async function handlePostRequest() {
    const code = "POST /posts";
    await insertPost();
    logRequest(code);
}

async function handlePutRequest() {
    const code = "PUT /posts/:id";
    await updatePost();
    logRequest(code);
}

async function handleDeleteRequest() {
    const code = "DELETE /posts/:id";
    await deletePost();
    logRequest(code);
}

document.getElementById('get').addEventListener('click', handleGetRequest);
document.getElementById('post').addEventListener('click', handlePostRequest);
document.getElementById('put').addEventListener('click', handlePutRequest);
document.getElementById('delete').addEventListener('click', handleDeleteRequest);



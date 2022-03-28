const express = require('express');
const autores = require('./controladores/autores');
const livros = require('./controladores/livros');
const emprestimos = require('./controladores/emprestimos');
const usuarios = require('./controladores/usuarios');

const rotas = express();

// autores
rotas.get('/autores', autores.listarAutores);
rotas.get('/autores/:id', autores.obterAutor);
rotas.post('/autores', autores.cadastrarAutor);
rotas.put('/autores/:id', autores.atualizarAutor);
rotas.delete('/autores/:id', autores.excluirAutor);

// livros
rotas.get('/livros', livros.listarLivros);
rotas.get('/livros/:id', livros.obterLivro);
rotas.post('/livros', livros.cadastrarLivro);
rotas.put('/livros/:id', livros.atualizarLivro);
rotas.delete('/livros/:id', livros.excluirLivro);

// -   Listagem geral de usuarios
// -   Listagem de apenas um usuarios filtrado pelo seu identificador único
// -   Cadastro de usuário
// -   Atualização de usuário
// -   Exclusão de usuário
rotas.get('/usuarios', usuarios.listarUsuarios);
rotas.get('/obterusuario/:id', usuarios.obterUsuario);
rotas.post('/usuario', usuarios.cadastrarUsuario);
rotas.put('/usuario/:id', usuarios.atualizarUsuario);
rotas.delete('/usuario/:id', usuarios.deleteUsuario);




// -   Listagem geral de emprestimos
// -   Listagem de apenas um empréstimo filtrado pelo seu identificador único
// -   Cadastro de empréstimo
// -   Atualização de empréstimo
// -   Exclusão de empréstimo

rotas.get('/emprestimo', emprestimos.listarEmprestimo);
rotas.get('/obteremprestimo/:id', emprestimos.obterEmprestimo);
rotas.post('/emprestimo', emprestimos.cadastrarEmprestimo);
rotas.put('/emprestimo/:id', emprestimos.atualizarEmprestimo);
rotas.delete('/emprestimo/:id', emprestimos.deleteEmprestimo);

module.exports = rotas;


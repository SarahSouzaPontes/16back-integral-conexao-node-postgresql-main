
-- 1 - Deve ser implementada uma nova tabela `usuarios` no banco de dados e suas respectivas funcionalidades na Api, com os seguintes campos:

-- -   Um identificador único do usuário como chave primaria e auto incremento;
-- -   O nome (obrigatório)
-- -   A idade
-- -   O email (obrigatório e único)
-- -   O telefone
-- -   O cpf (obrigatório e único)

CREATE DATABASE biblioteca;

CREATE TABLE NOT EXISTS usuarios (
    id serial primary key, 
    nome text not null,
    idade integer,
    email text not null,
    telefone integer,
    cpf integer not null
);


-- -   Um identificador único do empréstimo como chave primaria e auto incremento;
-- -   O id do usuario (obrigatório)
-- -   O id do livro (obrigatório)
-- -   O status do empréstimo que só poderá receber dois valores (`pendente` e `devolvido`) e por padrão deverá ser `pendente`.

CREATE TABLE IF NOT EXISTS emprestimo (
    id serial primary key, 
    idusuario int not null references usuarios(id),
    idlivro int not null,
    status boolean DEFAULT false,
    
);
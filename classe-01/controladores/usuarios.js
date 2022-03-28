const conexao = require('../conexao');

const listarUsuarios = (req, res) => {
    try {
        const { rows: usuarios } = await conexao.query('select * from usuarios');
        return res.status(200).json(usuarios);
    } catch (error) {
        return res.status(400).json(error.message);
    }

}


const obterUsuario = (req, res) => {
    const { id } = req.params
    try {
        const { rows: usuarios } = await conexao.query('select * from usuarios WHERE id = $1', [id]);
        return res.status(200).json(usuarios);
    } catch (error) {
        return res.status(400).json(error.message);
    }

}


const cadastrarUsuario = (req, res) => {
    const { nome, idade, email, telefone, cpf } = req.body;
    try {
        await conexao.query(
            'insert into usuarios (nome, idade, email, telefone, cpf) values ($1, $2, $3, $4, $5)',
            [nome, idade, email, telefone, cpf]);
        return res.status(200).json('Usuario cadastrado');
    } catch (error) {
        return res.status(400).json(error.message);
    }

}


const atualizarUsuario = (req, res) => {
    const { id } = req.params
    const { nome, idade, email, telefone, cpf } = req.body;
    try {
        await conexao.query('update usuarios set nome = $1, idade = $2, email = $3, telefone = $4, cpf= $5 where id=$6', [nome, idade, email, telefone, cpf, id]);
        return res.status(200).json('Usuário Atualizado');
    } catch (error) {
        return res.status(400).json(error.message);
    }

}

const deleteUsuario = (req, res) => {
    const { id } = req.params
    try {
        const verificarEmprestimo = await conexao.query(
            'select * from usuarios join emprestimos on usuarios.id = emprestimos.id_usuario where usuarios id  = $1 and emprestimos.emprestimo = $2',
            [id, 'pendente'])
        if (verificarEmprestimo.rowCount > 0) {
            return res.status(400).json('Usário com livro pendente')
        }
        const usuarioExcluido = await conexao.query('delete from usuarios where id = $1', [id]);
        if (usuarioExcluido.rowCount === 0) {
            return res.status(400).json('Usuário não pode ser excluído')
        }
        return res.status(200).json('Usuário foi excluiído');
    } catch (error) {
        return res.status(400).json(error.message);
    }

}


module.exports = {
    listarUsuarios,
    obterUsuario,
    cadastrarUsuario,
    atualizarUsuario,
    deleteUsuario

}
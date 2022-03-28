const conexao = require('../conexao');


const listarEmprestimo = async (req, res) => {
    try {
        const { rows: emprestimo } = await conexao.query('select * from emprestimos');
        return res.status(200).json(emprestimo);
    } catch (error) {
        return res.status(400).json(error.message);
    }

}

const obterEmprestimo = async (req, res) => {
    const { id } = req.params
    try {
        const { rows: emprestimo } = await conexao.query('select * from emprestimos WHERE id = $1', [id]);
        return res.status(200).json(emprestimo);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const cadastrarEmprestimo = async (req, res) => {
    const { id_usuario, id_livro, status } = req.body
    if (!id_usuario || !id_livro) {
        return res.status(400).json('{Identificação do usário e do livro são obrigatórias}');

    }

    try {
        const { rows: emprestimo } = await conexao.query('insert into emprestimos (id_usuario, id_livro, status) values ($1, $2, $3)');
        return res.status(200).json(emprestimo);
    } catch (error) {
        return res.status(400).json(error.message);
    }

}

const atualizarEmprestimo = async (req, res) => {
    const { status, id_usuario } = req.body
    try {
        const { rows: emprestimo } = await conexao.query('update emprestimos set status=$1 where id_usuario = $2', [status, id_usuario]);
        return res.status(200).json(emprestimo);
    } catch (error) {
        return res.status(400).json(error.message);
    }

}
const deleteEmprestimo = async (req, res) => {
    try {
        const query = 'delete from emprestimos where id = $1';
        const emprestimoExcluido = await conexao.query(query, [id]);

        if (emprestimoExcluido.rowCount === 0) {
            return res.status(400).json('Impossível excluir o emprestimo')
        }

        return res.status(200).json('Emprestimo foi excluido com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    listarEmprestimo,
    obterEmprestimo,
    cadastrarEmprestimo,
    atualizarEmprestimo,
    deleteEmprestimo
};




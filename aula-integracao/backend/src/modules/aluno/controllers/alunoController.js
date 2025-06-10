const Aluno = require('../models/alunoModel');
const Curso = require('../../curso/models/cursoModel');

class AlunoController {

	static async criar(req, res) {
		try {
			const { matricula, nome, cod_curso } = req.body;
			if (matricula && nome && cod_curso) {
				const aluno = await Aluno.create({ matricula, nome, cod_curso });
				res.status(201).json({ msg: 'Aluno cadastrado com sucesso!', aluno });
			} else {
				res.status(400).json({ msg: 'Todos os campos devem ser preenchidos.' })
			}
		} catch (error) {
			res.status(500).json({ erro: error.message })
		}
	}

	static async listar(req, res) {
		try {
			const alunos = await Aluno.findAll({
				include: {
					model: Curso,
					atributes: ['nome']
				}
			});

			if (alunos.length > 0) {
				return res.status(200).json(alunos)
			};
			res.status(200).json({ msg: 'Nenhum aluno encontrado.' })
		} catch (error) {
			res.status(500).json({ erro: error.message })
		}
	}

	static async atualizar(req, res) {
		try {
			const matricula = req.params.matricula;
			const { nome, cod_curso } = req.body;

			if (nome && cod_curso) {
				const aluno = await Aluno.update(
					{ matricula, nome, cod_curso },
					{ where: { matricula: matricula } }
				);
				res.status(200).json({ msg: 'Aluno atualizado com sucesso!', aluno });
			} else {
				res.status(400).json({ msg: 'Todos os campos devem ser preenchidos.' })
			}
		} catch (error) {
			res.status(500).json({ erro: error.message })
		}
	}

	static async deletar(req, res) {
		try {
			const { matricula } = req.params;
			const aluno = await Aluno.findByPk(matricula);

			if (!aluno) {
				res.status(400).json({ msg: 'Aluno não encontrado.' });
			};

			await aluno.destroy();
				res.status(200).json({ msg: 'Registro deletado com sucesso!' });
			} catch (error) {
			res.status(500).json({ erro: error.message })
		}
	}
};

module.exports = AlunoController;
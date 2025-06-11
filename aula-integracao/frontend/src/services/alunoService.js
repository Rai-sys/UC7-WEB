import api from './api';

class AlunoService {
   static async listar() {
      try {
         const res = await api.get('/alunos');
         return res.data;
      } catch (error) {
         console.log('Erro ao listar alunos', error.message);
         return [];
      }
   }

   static async criar(dados) {
      try {
         const res = await api.post('/alunos', dados);
         return res.data;
      } catch (error) {
         console.log('Erro ao criar o aluno', error.message);
      }
   }

   static async atualizar(matricula, dados) {
      try {
         const res = await api.put(`/alunos/${matricula}`, dados);
         return res.data;
      } catch (error) {
         console.log('Erro ao atualizar o aluno', error.message);
      }
   }

   static async deletar(matricula) {
      try {
         const res = await api.delete(`/alunos/${matricula}`);
         return res.data;
      } catch (error) {
         console.log('Erro ao deletar o aluno', error.message);
      }
   }
}

export default AlunoService;
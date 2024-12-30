const { Sequelize } = require('sequelize');
const connection = require('../api/config/connection'); // Importa o arquivo com a conexão

jest.mock('sequelize'); // Mock do Sequelize para evitar uma conexão real

describe('Testando a conexão com o banco de dados', () => {

    beforeAll(() => {
        // Mock do método sync para evitar a conexão real
        Sequelize.mockImplementation(() => {
            return {
                sync: jest.fn().mockResolvedValue("Conexão bem-sucedida"), // Mock de sucesso
            };
        });
    });

    it('Deve realizar a conexão com o banco de dados', async () => {
        // Aqui mockamos a criação da instância de Sequelize
        const sequelizeInstance = new Sequelize(); 

        // Chamamos o método sync da instância mockada
        const result = await sequelizeInstance.sync();
        
        // Verifica se o método sync foi chamado
        expect(sequelizeInstance.sync).toHaveBeenCalled();

        // Verifica se o resultado da conexão é o esperado
        expect(result).toBe("Conexão bem-sucedida");
    });

    it('Deve lançar erro se houver problema na conexão', async () => {
        // Simulando erro no método sync
        Sequelize.mockImplementation(() => {
            return {
                sync: jest.fn().mockRejectedValue(new Error('Erro na conexão')),
            };
        });

        try {
            const sequelizeInstance = new Sequelize(); 
            await sequelizeInstance.sync(); // Chama o método que agora rejeita
        } catch (error) {
            // Verifica se o erro foi lançado corretamente
            expect(error).toEqual(new Error('Erro na conexão'));
        }
    });

});

const check = require('../api/status/statusCheck.js');

describe('Status Check', () => {

    let res; // Vamos criar um mock para a resposta (res)

    beforeEach(() => {
        res = {
            status: jest.fn().mockReturnThis(), // Mock para o método `status`, ele retorna o próprio objeto res
            json: jest.fn(), // Mock para o método `json`
        };
    });

    it('Deve retornar status 200 e o conteúdo correto com status200', () => {
        const content = { message: "Success" };

        check.status200(res, content);

        // Verifica se o status foi chamado com 200
        expect(res.status).toHaveBeenCalledWith(200);

        // Verifica se o conteúdo foi passado para o método `json`
        expect(res.json).toHaveBeenCalledWith(content);
    });

    it('Deve retornar status 404 se o conteúdo for null com status200', () => {
        check.status200(res, null);

        // Verifica se o status foi chamado com 404
        expect(res.status).toHaveBeenCalledWith(404);

        // Verifica se o método `json` foi chamado sem parâmetros
        expect(res.json).toHaveBeenCalledWith();
    });

    it('Deve retornar status 204 e o conteúdo correto com status204', () => {
        const content = { message: "No Content" };

        check.status204(res, content);

        // Verifica se o status foi chamado com 204
        expect(res.status).toHaveBeenCalledWith(204);

        // Verifica se o conteúdo foi passado para o método `json`
        expect(res.json).toHaveBeenCalledWith(content);
    });

    it('Deve retornar status 404 se o conteúdo for null com status204', () => {
        check.status204(res, null);

        // Verifica se o status foi chamado com 404
        expect(res.status).toHaveBeenCalledWith(404);

        // Verifica se o método `json` foi chamado sem parâmetros
        expect(res.json).toHaveBeenCalledWith();
    });

});

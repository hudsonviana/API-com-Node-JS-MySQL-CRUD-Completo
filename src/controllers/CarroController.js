const CarroService = require('../services/CarroService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error: '', result: []};

        let carros = await CarroService.buscarTodos();

        for (let i in carros) {
            json.result.push({
                id: carros[i].id,
                modelo: carros[i].modelo,
                placa: carros[i].placa
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error: '', result: {}};

        let id = req.params.id;
        let carro = await CarroService.buscarUm(id);

        if (carro) {
            json.result = carro;
        }

        res.json(json);
    },

    inserir: async (req, res) => {
        let json = {error: '', result: {}};

        let modelo = req.body.modelo;
        let placa = req.body.placa;
                
        if (modelo && placa) {
            let carroId = await CarroService.inserir(modelo, placa);
            json.result = {
                id: carroId,
                modelo,
                placa
            };
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    alterar: async (req, res) => {
        let json = {error: '', result: {}};

        let id = req.params.id;
        let modelo = req.body.modelo;
        let placa = req.body.placa;
                
        if (id && modelo && placa) {
            await CarroService.alterar(id, modelo, placa);
            json.result = {
                id,
                modelo,
                placa
            };
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },
};

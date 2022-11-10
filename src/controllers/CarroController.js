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
    }
};

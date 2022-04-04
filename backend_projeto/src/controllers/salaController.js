import salaService from "../services/salaService.js"

class SalaController {
    apiStatus = (req, res) => {
        const message = salaService.criarSala('E003','Sala de informatica');
        res.status(200).json(message);
    }
}


export default new SalaController();
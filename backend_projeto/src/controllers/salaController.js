import salaService from "../services/salaService.js"

class SalaController {
    apiStatus = (req, res) => {
        const message = salaService.mostrarSala();
        res.status(200).json(message);
    }
}

export default new SalaController();
import salaService from "../services/salaService.js"

class SalaController {
    criarSala = async (req, res) => {
        try{
            const message = await salaService.criarSala(req);
            res.status(201).json(message);
        }
        catch(err){
            res.status(500).json(err.message);
        }
        
    }

    mostrarSala = async (req, res) => {
        try{
            const message = await salaService.mostrarSala();
            res.status(201).json(message);
        }
        catch(err){
            res.status(500).json(err.message);
        }
    }

    modificarSala = async (req, res) => {
        try{
            const message = await salaService.modificarSala(req);
            res.status(201).json(message);
        }
        catch(err){
            res.status(500).json(err.message);
        }
    }

    deletarSala = async (req, res) => {
        try{
            const message = await salaService.deletarSala(req);
            res.status(201).json(message);
        }
        catch(err){
            res.status(500).json(err.message);
        }
    }
}


export default new SalaController();
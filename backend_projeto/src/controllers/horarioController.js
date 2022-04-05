import horarioService from "../services/horarioService.js"

class HorarioController {
    criarHorario = async (req, res) => {
        try{
            const message = await horarioService.criarHorario(req);
            res.status(201).json(message);
        }
        catch(err){
            res.status(500).json(err.message);
        }
        
    }

    mostrarHorario = async (req, res) => {
        try{
            const message = await horarioService.mostrarHorario();
            res.status(201).json(message);
        }
        catch(err){
            res.status(500).json(err.message);
        }
    }

    modificarHorario = async (req, res) => {
        try{
            const message = await horarioService.modificaHorario(req);
            res.status(201).json(message);
        }
        catch(err){
            res.status(500).json(err.message);
        }
    }

    deletarHorario = async (req, res) => {
        try{
            const message = await horarioService.deletaHorario(req);
            res.status(201).json(message);
        }
        catch(err){
            res.status(500).json(err.message);
        }
    }
}


export default new HorarioController();
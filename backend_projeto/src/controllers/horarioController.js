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
            res.status(200).json(message);
        }
        catch(err){
            res.status(500).json(err.message);
        }
    }

    mostrarHorarioSalas = async (req, res) => {
        try{
            const message = await horarioService.mostrarHorarioSalas(req);
            res.status(200).json(message);
        }
        catch(err){
            res.status(500).json(err.message);
        }
    }

    modificarHorario = async (req, res) => {
        try{
            const message = await horarioService.modificarHorario(req);
            res.status(200).json(message);
        }
        catch(err){
            res.status(500).json(err.message);
        }
    }

    deletarHorario = async (req, res) => {
        try{
            const message = await horarioService.deletarHorario(req);
            res.status(202).json(message);
        }
        catch(err){
            res.status(500).json(err.message);
        }
    }
}


export default new HorarioController();
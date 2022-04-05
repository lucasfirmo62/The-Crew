import professorService from "../services/professorService.js"

class ProfessorController {
    criarProfessor = async (req, res) => {
        try{
            const message = await professorService.criarProfessor(req);
            res.status(201).json(message);
        }
        catch(err){
            res.status(500).json(err.message);
        }
        
    }

    mostrarProfessor = async (req, res) => {
        try{
            const message = await professorService.mostrarProfessor();
            res.status(201).json(message);
        }
        catch(err){
            res.status(500).json(err.message);
        }
    }

    modificarProfessor = async (req, res) => {
        try{
            const message = await professorService.modificaProfessor(req);
            res.status(201).json(message);
        }
        catch(err){
            res.status(500).json(err.message);
        }
    }

    deletarProfessor = async (req, res) => {
        try{
            const message = await professorService.deletaProfessor(req);
            res.status(201).json(message);
        }
        catch(err){
            res.status(500).json(err.message);
        }
    }
}


export default new ProfessorController();
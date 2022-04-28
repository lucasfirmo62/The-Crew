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
            const message = await professorService.modificarProfessor(req);
            res.status(201).json(message);
        }
        catch(err){
            res.status(500).json(err.message);
        }
    }

    deletarProfessor = async (req, res) => {
        try{
            const message = await professorService.deletarProfessor(req);
            res.status(201).json(message);
        }
        catch(err){
            res.status(500).json(err.message);
        }
    }

    gerarTokenAcesso = async (req, res) => { 
        const message = await professorService.gerarTokenAcesso(req);
        return res.status(message.status).json(message);
    }
}


export default new ProfessorController();
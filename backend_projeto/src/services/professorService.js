import Prisma from '@prisma/client'
const { PrismaClient } = Prisma
import { API_SECRET } from '../config/constants.js';
import { AuthException } from '../config/authException.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class ProfessorService {
    constructor() {
        this.prisma = new PrismaClient();
    }

    async criarProfessor(req) {
        const { ra, senha, nome, email } = req.body

        const professor = await this.prisma.Professor.create({
            data: {
                ra: ra,
                senha: bcrypt.hashSync(senha, 10),
                nome: nome,
                email: email
            },
        });
        return professor
    }

    async mostrarProfessor() {
        const professor = await this.prisma.Professor.findMany();
        return professor
    }

    async modificarProfessor(req) {
        const { id, ra, senha, nome, email } = req.body

        const professor = await this.prisma.Professor.update({
            where: { //se ra == ra
                id: id,
            },
            data: { //altera os dados
                ra: ra,
                senha: senha,
                nome: nome,
                email: email
            },
        });
        return professor
    }

    async deletarProfessor(req) {
        const { id } = req.body
        const professor = await this.prisma.Professor.delete({
            where: {
                id: id,
            },
        });
        return professor
    }
    
    async validarSenha(senha, senhaHash){
        if (!await bcrypt.compare(senha, senhaHash)) {
            throw new AuthException(401, "Senha não bate");
        }
    }

    async gerarTokenAcesso(req) {
        const {ra, senha} = req.body 

        try{
            const professor = await this.prisma.professor.findFirst({
                where: {
                    ra: ra,
                }
            })

            await this.validarSenha(senha, professor.senha)

            const authProfessor = {
                id: professor.id,
                ra: professor.ra, 
                nome: professor.nome,
                email: professor.email
            };
            
            const tokenAcesso = jwt.sign(
                {authProfessor},
                API_SECRET,
                {expiresIn: "1d"}
            );
            
            return {
                usuario: authProfessor,
                tokenAcesso: tokenAcesso
            }
        }

        catch(Erro){
            return {
                status: Erro.status,
                message: Erro.message
            }
        }
    }
}

// exportando o objeto dessa classe, instância
export default new ProfessorService();
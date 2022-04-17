import Prisma from '@prisma/client'
const { PrismaClient } = Prisma


class ProfessorService {
    constructor() {
        this.prisma = new PrismaClient();
    }

    async criarProfessor(req) {
        const { ra, senha, nome, email } = req.body
        const professor = await this.prisma.Professor.create({
            data: {
                ra: ra,
                senha: senha,
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
}
// exportando o objeto dessa classe, instância
export default new ProfessorService();
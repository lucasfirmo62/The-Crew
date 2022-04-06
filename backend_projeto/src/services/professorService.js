import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

class ProfessorService {
    constructor() {
        this.prisma = new PrismaClient();
    }

    async criarProfessor(req) {
        const { ra, nome, email } = req.body
        const professor = await this.prisma.Professor.create({
            data: {
                ra: ra,
                nome: nome,
                email: email,
            },
        });
        return professor
    }

    async mostrarProfessor() {
        const professor = await this.prisma.Professor.findMany();
        return professor
    }

    // async adicionarHorario(req) {
    //     const { ra, horarioId } = req.body
        
    //     const horario = await this.prisma.Horario.findUnique({
    //         where: { id: horarioId },
    //     });

    //     const professor = await this.prisma.Professor.update({
    //         where: { //se ra == ra
    //             ra: ra,
    //         },
    //         data: { 
    //             Horario: horario,
    //         },
    //     });
    // }

    async modificarProfessor(req) {
        const { id, ra, nome, email } = req.body

        const professor = await this.prisma.Professor.update({
            where: { //se ra == ra
                id: id,
            },
            data: { //altera os dados
                ra: ra,
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
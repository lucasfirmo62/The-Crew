import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

class SalaService {
    constructor () {
        this.prisma = new PrismaClient();
    }

    async criarSala(req) {
        const {idFalso, descricao} = req.body
        const sala = await this.prisma.Sala.create({
            data: {
                id_sala: idFalso,
                descricao: descricao,
            },
        });
        return sala
    }

    async mostrarSala() {
        const sala = await this.prisma.Sala.findMany();
        return sala
    }
    
    async modificarSala(req){
        const {id, idFalso, descricao} = req.body
        const sala = await this.prisma.Sala.update({
            where: { //se id_sala == idFalso
                id: id,
            },
            data: { //altera descricao somente
                id_sala: idFalso,
                descricao: descricao,
            },
        });
        return sala
    }

    async deletarSala(req){
        const { id } = req.body
        const sala = await this.prisma.Sala.delete({
            where: {
                id: id,
            },
            
        });
        return sala
    }
} 
// exportando o objeto dessa classe, instância
export default new SalaService();
import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

class SalaService {
    constructor () {
        this.prisma = new PrismaClient();
    }

    async criarSala(req) {
        const {idFake, descricao} = req.body
        const sala = await this.prisma.Sala.create({
            data: {
                id_sala: idFake,
                descricao: descricao,
            },
        });
        return sala
    }

    async mostrarSala() {
        const sala = await this.prisma.Sala.findMany();
        return sala
    }
    
    async modificaSala(req){
        const {idFake, descricao} = req.body
        const sala = await this.prisma.Sala.update({
            where: { //se id_sala == idFake
                id_sala: idFake,
            },
            data: { //altera descricao somente
                descricao: descricao,
            },
        });
        return sala
    }

    async deletaSala(id){
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
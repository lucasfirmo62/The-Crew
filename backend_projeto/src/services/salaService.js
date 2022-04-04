import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

class SalaService {
    constructor () {
        this.prisma = new PrismaClient();
    }

    async criarSala(idFake, descricao) {
        const sala = await prisma.Sala.create({
            data: {
                id_sala: idFake,
                descricao: descricao,
            },
        });
        return sala
    }

    async mostrarSala() {
        const sala = await prisma.Sala.findMany();
        return sala
    }
    
    async modificaSala(idFake, descricao){
        const sala = await prisma.Sala.update({
            where: { //se id == idFake
                id: idFake,
            },
            data: { //altera descricao somente
                descricao: descricao,
            },
        });
        return sala
    }
} 
// exportando o objeto dessa classe, instância
export default new SalaService();
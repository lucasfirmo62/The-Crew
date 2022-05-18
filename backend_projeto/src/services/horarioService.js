import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

class HorarioService {
    constructor () {
        this.prisma = new PrismaClient();
    }

    async criarHorario(req) {
        const {diaReserva, hora, professorId, salaId} = req.body
        const horario = await this.prisma.Horario.create({
            data: {
                dia_da_semana: diaReserva,
                horario: hora,
                professorId: professorId,
                salaId: salaId
            },
        });
        return horario
    }

    async mostrarHorario() {
        const horario = await this.prisma.Horario.findMany();
        return horario
    }

    async mostrarHorarioSalas(req){
        const {salaId} = req.body;

        const horario = await this.prisma.Horario.findMany({
            where: {
                sala: {
                    id: {
                        equals: salaId,
                    },
                },
            },
        })

        return horario
    }

    //mostra a sala por id de horario
    // async mostrarHorarioSalas(req) {
    //     const{id} = req.body
    //     const horario = await this.prisma.Horario.findUnique({
    //         where: {
    //             id: id,
    //         },
    //     })

    //     const idsala = await this.prisma.Sala.findUnique({
    //         where: {
    //             id:  horario.salaId,
    //         },
    //     })

    //     return idsala.id_sala
    // }

    async modificarHorario(req){
        const {id, diaReserva, hora} = req.body
        const horario = await this.prisma.Horario.update({
            where: { //se ra == ra
                id: id,
            },
            data: { //altera os dados
                dia_da_semana: diaReserva,
                horario: hora
            },
        });
        return horario
    }

    async deletarHorario(req){
        const { id } = req.body
        const horario = await this.prisma.Horario.delete({
            where: {
              id: id,
            },
        });
        return horario
    }
} 
// exportando o objeto dessa classe, instância
export default new HorarioService();
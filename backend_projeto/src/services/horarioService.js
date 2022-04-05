import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

import professorService from "./professorService.js"

class HorarioService {
    constructor () {
        this.prisma = new PrismaClient();
    }

    async criarHorario(req) {
        const {diaReserva, horaI, horaF, professorId, salaId} = req.body
        const horario = await this.prisma.Horario.create({
            data: {
                dia_da_reserva: new Date(diaReserva),
                horario_final: new Date(horaI),
                horario_inicio: new Date(horaF),
                professorId: professorId,
                salaId: salaId
            },
        });

        return horario
    }

    async mostrarHorarioPorId(req) {
        const { id } = req.body;
        const horario = await this.prisma.Horario.findUnique({
            where: { id: id },
        });

        return horario;
    } 

    async mostrarHorario() {
        const horario = await this.prisma.Horario.findMany();
        return horario
    }
    
    async modificarHorario(req){
        const {id, diaReserva, horaI, horaF} = req.body
        const horario = await this.prisma.Horario.update({
            where: { //se ra == ra
                id: id,
            },
            data: { //altera os dados
                dia_da_reserva: diaReserva,
                horario_final: horaI,
                horario_inicio: horaF,
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
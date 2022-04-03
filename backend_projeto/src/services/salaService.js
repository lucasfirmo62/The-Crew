//import { PrismaClient } from "@prisma/client";

class SalaService {
//    constructor () {
//        this.prisma = new PrismaClient();
//    }
    mostrarSala() {
        return {
            "message": "Sala E003"
        }
    }
} 

export default new SalaService();

// exportando o objeto dessa classe, instância
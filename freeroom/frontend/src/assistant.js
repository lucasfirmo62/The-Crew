export function daySelect(dayAPI){
    if(dayAPI === "seg"){
        return "segunda-feira";
    }else if(dayAPI === "ter"){
        return "terça-feira";
    }else if(dayAPI === "qua"){
        return "quarta-feira";
    }else if(dayAPI === "qui"){
        return "quinta-feira";
    }else if(dayAPI === "sex"){
        return "sexta-feira";
    }else if(dayAPI === "sab"){
        return "sábado";
    }
}

export function verifyHorary(horaryExists, room){
    if(room.length === undefined){
        if(room.id_sala == horaryExists){
            return room.id
        }
    }else{
        for(var x in room){
            if(room[x].id_sala == horaryExists){
                return room[x].id
            }
        }
    }
}

export function usageVerify(horaryAtual, horaryUsage){
    var i = horaryUsage.length;
    for(var x in horaryUsage){
        if(horaryAtual === horaryUsage[x]){
            return horaryAtual;
        }
    }
    return -1;
}

export function roomClick(idSala, room, horary, daysWeek){
    var usage = []
    for(var o in horary){
        if((horary[o].salaId === verifyHorary(idSala, room)) && (horary[o].dia_da_semana === daysWeek.substring(0,3))){
            usage.push(horary[o].horario)
        }
      }
      console.log(usage)
      return usage;
}
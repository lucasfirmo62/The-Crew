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

export function removeQuote(item){
    return item.slice(1, item.length - 1); 
}

export function idRoom(idRoom, room){
    for(var b in room){
        if(idRoom === room[b].id){
            console.log(room[b].id_sala)
            return room[b].id_sala;
        }
    }
}

export function searchTeacher(horaryTeacher, userID){
    for(var t in horaryTeacher){
        if(horaryTeacher.professorId[t] === userID){
            return horaryTeacher.professorId[t];
        }
    }
}

export function roomVerify(block, idRoom){
    if((block + "001" === idRoom) ||
    (block + "002" === (idRoom))||
    (block + "003" === (idRoom))||
    (block + "004" === (idRoom))||
    (block + "005" === (idRoom))||
    (block + "006" === (idRoom))||
    (block + "007" === (idRoom))||
    (block + "101" === (idRoom))||
    (block + "102" === (idRoom))||
    (block + "103" === (idRoom))||
    (block + "104" === (idRoom))||
    (block + "105" === (idRoom))||
    (block + "106" === (idRoom))||
    (block + "107" === (idRoom))){
        return true;
    }else{
        return false;
    }
}

export function go(link){
    window.location.replace(`/${link}`);
}

export function exitAccount() {
    var token;
    localStorage.setItem('user', JSON.stringify(null));
    localStorage.setItem('IdUser', JSON.stringify(null));
    localStorage.setItem('nameUser', JSON.stringify(null));

    window.location.replace("/");
    return token = null;
}
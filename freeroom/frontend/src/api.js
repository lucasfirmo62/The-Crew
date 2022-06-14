import axios from 'axios'
import { useEffect, useState } from 'react';

function horarioCriar(novoHorario){
    try{
        axios.post('http://localhost:3000/horario/criar', novoHorario);
    }
    catch(error){
        console.log(error);
    }
}
    

function horarioMostrar(){

    const [data, setPostData] = useState = ([])

    useEffect(() => {
        try{
            axios.get('http://localhost:3000/horario/mostrar')
                .then(response => {
                    setPostData(response.data)
                })
        }
        catch(error){
            console.log(error);
        }
    }, [])

    return data;
}

function horarioModificar(novoHorario){
    try{
        axios.put('http://localhost:3000/horario/modificar', novoHorario);
    }
    catch(error){
        console.log(error);
    }
}

function horarioDeletar(horario){
    try{
        axios.delete('http://localhost:3000/horario/deletar', horario);
    }
    catch(error){
        console.log(error);
    }
}
  
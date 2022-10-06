//traer la dependencia del

import  { sumar, restar } from './sumar.js' 
import materias from './materias.js'

//1. recorrido de arreglo: forEach
materias.forEach((materia)=> { 
        if(materia.profesor === 'Cristian Buitrago'){
            console.log( `materia: ${materia.name}`)
            console.log( `notas: ${materia.notas}`)
        }
    })
//2. convertir a un arreglo de profesores
//   metodo map()
let profesores = materias.map(function(materia){
    return materia.profesor
})

//3. agregar una materia al arreglo de materias
// push()
materias.push(
    {
        id: 5,
        name: "Cultura Física",
        profesor: "Luis Baquero",
        notas: [
            2 , 
            3.5
        ]
    }
)  

//4. busqueda en arreglos:
//find 
const PHP = materias.find(function(materia){
     return materia.profesor === 'Cristian Buitrago'
})

console.log(PHP)


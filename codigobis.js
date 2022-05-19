let usuario = prompt("¡Bienvenidx a tu lista de tareas! ¿Cúal es tu nombre?")
let ingreso = confirm("¿Quieres comenzar tu lista de tareas?")

let tarea
let hora
let importancia

let masTareas

let busqueda

const pocoImportante = []
const importante = []
const muyImportante = []

class TareasDiarias {
    constructor(tarea, hora, importancia) {
        this.tarea = tarea;
        this.hora = hora;
        this.importancia = importancia;
    }
}

const admImportancia = () => {
        switch (tareaTarea.importancia) {
            case `1`: console.log("POCO IMPORTANTE");
                        pocoImportante.push(tareaTarea)
            break;
            case `2`: console.log("IMPORTANTE");
                        importante.push(tareaTarea)
            break;
            case `3`: console.log("MUY IMPORTANTE");
                        muyImportante.push(tareaTarea)
            break;
            default: console.log("NO INGRESO IMPORTANCIA");
            break;
        }
    }

const preguntaTareas = () => {
    
    tarea = prompt(usuario + ", ¿Que tenes que hacer hoy?")
    hora = prompt("¿A qué hora?")
    importancia = prompt("Ingresa \n 1 si esta tarea es POCO IMPORTANTE \n 2 si esta tarea es IMPORTANTE \n 3 si esta tarea es MUY IMPORTANTE")

    return tareaTarea = new TareasDiarias (tarea, hora, importancia)
}

const ingresoOk = () => {
    if (ingreso == true) {
        preguntaTareas()
        admImportancia()
        alert (`Excelente, ${usuario}. ${tarea} se agrego a tus tareas en este horario: ${hora}`)
    
        masTareas = confirm("¿Queres ingresar una nueva tarea?")
    
        while (masTareas == true) {
            preguntaTareas()
            admImportancia()
    
            alert (`Excelente, ${usuario}. ${tarea} se agrego a tus tareas en este horario: ${hora}`)
    
            masTareas = confirm("¿Queres ingresar una nueva tarea?")
        }
    
    } else {
        alert("Podes volver a armar tu lista de tareas cuando desees...")
    }
}

ingresoOk()

//BUSCAR TAREAS POR IMPORTANCIA

const buscaTareasImportancia = () => {

    busqueda = prompt("Ingresa \n 1 para ver las tareas POCO IMPORTANTES \n 2 para ver las tareas IMPORTANTES \n 3 para ver las tareas MUY IMPORTANTES ")

    switch (busqueda) {
        case `1`: pocoImportante.forEach ( tareaTarea => alert(tareaTarea.tarea))
        break;
        case `2`: importante.forEach ( tareaTarea => alert(tareaTarea.tarea))
        break;
        case `3`: muyImportante.forEach ( tareaTarea => alert(tareaTarea.tarea))
        break;
        default: alert("NO HAY COINCIDENCIAS PARA TU BÚSQUEDA");
        break;
    }
}

buscaTareasImportancia()

//pocoImportante.forEach ( tareaTarea => console.log(tareaTarea.tarea))
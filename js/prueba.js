let tarea
let hora
let importancia

const pocoImportante = []
const importante = []
const muyImportante = []

//CONSTRUCTOR
class TareasDiarias {
    constructor(tarea, hora, importancia) {
        this.tarea = tarea;
        this.hora = hora;
        this.importancia = importancia;
    }
}

//GUARDAR TAREAS
const guardaTareas = () => {

    let tarea = document.getElementById("tarea").value;
    let hora = document.getElementById("hora").value;
    let importancia = document.getElementById("importancia").value.toUpperCase();

    return nuevaTarea = new TareasDiarias (tarea, hora, importancia)
}

//ADMINISTRAR IMPORTANCIA
const admImportancia = () => {

let importanciaTarea = guardaTareas().importancia
let nuevaTarea = guardaTareas()

    switch (importanciaTarea) {
        case `POCO IMPORTANTE`: console.log("POCO IMPORTANTE");
                    pocoImportante.push(nuevaTarea)
        break;
        case `IMPORTANTE`: console.log("IMPORTANTE");
                    importante.push(nuevaTarea)
        break;
        case `MUY IMPORTANTE`: console.log("MUY IMPORTANTE");
                    muyImportante.push(nuevaTarea)
        break;
        default: console.log("NO INGRESO IMPORTANCIA");
        break;
    }
}

//VERIFICACION FORMULARIO VACIO
const verificarFormulario = () => {
    let valor

    if (guardaTareas() != undefined) {
        valor = true
        return valor
    } else {
        valor = false
        return valor
    }
}

//STORAGE
const guardarEnStorage = () => {

    verificarStorage()
    localStorage.setItem("importante" , JSON.stringify(importante))
    localStorage.setItem("muyImportante", JSON.stringify(muyImportante))
    localStorage.setItem("pocoImportante", JSON.stringify(pocoImportante))

}

//VERIFICAR STORAGE

const verificarStorage = () => {

    let estorage

    if (localStorage.getItem("importante" || "muyImportante" || "pocoImportante") != null) {
        estorage = JSON.parse(localStorage.getItem("importante"))
        return estorage
    } else {
        estorage = importante
        return estorage
    }
}

//SUMAR A LISTA EN DOM
const sumarAlista = () => {
    let nuevaTarea = guardaTareas();
    let importanciaTarea = guardaTareas().importancia;
    let verificar = verificarFormulario()

    if (verificar = true) {

    
    let a = document.createElement("a");
    switch (importanciaTarea) {
        case "MUY IMPORTANTE":
            a.setAttribute("class", "list-group-item list-group-item-action list-group-item-danger");
            break;

        case "IMPORTANTE":
            a.setAttribute("class", "list-group-item list-group-item-action list-group-item-warning");
            break;

        case "POCO IMPORTANTE":
            a.setAttribute("class", "list-group-item list-group-item-action list-group-item-info");
            break;

        case "":
            a.setAttribute("class", "list-group-item list-group-item-action list-group-item-dark");
            break;
        }
    a.textContent = `${nuevaTarea.tarea}`;

    a.addEventListener("click", function () {
        document.getElementById("listaTareasDiv").removeChild(a);
    });

    document.getElementById("listaTareasDiv").appendChild(a);

    admImportancia()
    guardarEnStorage()
    
} else {
    return alert("no hay tarea para guardar")
}
}

const botonTareasDiarias = document.getElementById("botonDiarias")
botonTareasDiarias.addEventListener("click", sumarAlista)


//USUARIO

let usuarix
const guardaRegistro = () => {

    usuarix = prompt ("Ingresa tu nombre")

    const h1Registro = document.getElementById("nombreUsuario")
    h1Registro.textContent = usuarix

    swal({
        title: `Bienvenidx ${usuarix}`,
        text: "Comencemos tu lista de tareas",
        icon: "success",
        className: "swalProp"
    })

}

const botonRegistro = document.getElementById("botonUsuario")
botonUsuario.addEventListener("click", guardaRegistro)


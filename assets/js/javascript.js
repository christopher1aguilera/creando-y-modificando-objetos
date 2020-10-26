function Consultorio(cnombre, pacientes) {
    this.cnombre = cnombre;
    this.pacientes = pacientes || [];
}

function Paciente(pnombre, edad, rut, diagnostico) {
    this.pnombre = pnombre;
    this.edad = edad;
    this.rut = rut;
    this.diagnostico = diagnostico;
}

//prototipo consultorio
Consultorio.prototype.setNombre = function (cnombre) {
    this.cnombre = cnombre
}
Consultorio.prototype.getNombre = function () {
    return this.cnombre
}
Consultorio.prototype.getPacientes = function () {
    return this.Pacientes
}
Consultorio.prototype.setPaciente = function (paciente) {// añadir nuevo arrarys al arrays original
    return this.pacientes.push(paciente)
}
Consultorio.prototype.buscarPaciente = function (busqueda) {
    return this.pacientes.find(function (paciente) { //buscar nombre
        return paciente.pnombre === busqueda
    })
}

//prototipo paciente
Paciente.prototype.setNombre = function (pnombre) {// set modifica arrays
    this.pnombre = pnombre
}
Paciente.prototype.getNombre = function () {//get acceder datos
    return this.pnombre
}
Paciente.prototype.setEdad = function (edad) {
    this.edad = edad
}
Paciente.prototype.getEdad = function () {
    return this.edad
}
Paciente.prototype.setRut = function (rut) {
    this.rut = rut
}
Paciente.prototype.getRut = function () {
    return this.rut
}
Paciente.prototype.setDiagnostico = function (diagnostico) {
    this.diagnostico = diagnostico
}
Paciente.prototype.getDiagnostico = function () {
    return this.diagnostico
}




// main.js
let consultorio = []
let paciente = []
const result = document.getElementById('resultado')
let formulario = document.querySelector('form');
let ul = document.querySelector('ul');
let evaluacion = (event) =>{
    event.preventDefault();
  const cnombre = document.getElementById('cnombre').value;
  const pnombre = document.getElementById('pnombre').value;
  const edad = document.getElementById('edad').value;
  const rut = document.getElementById('rut').value;
  const diagnostico = document.getElementById('diagnostico').value;
  const opcion = document.querySelector('select').value
let p2 = new Paciente(pnombre, edad, rut, diagnostico)
let c2 = new Consultorio(cnombre, p2)
const div = document.createElement('table');
div.style.width = "1000px"
console.log(p2.pnombre) //
console.log(p2.rut)
console.log(p2.edad)
console.log(p2.diagnostico)
console.log(c2.cnombre)//
    if (opcion == "añadir") {
        console.log(p2.pnombre)
        consultorio.push(c2, p2)
        paciente.push(p2)
div.innerHTML = `<td><th>${c2.cnombre}</th><th>${p2.pnombre}</th><th>${p2.edad}</th><th>${p2.rut}</th><th>${p2.diagnostico}</th></td>`;
result.appendChild(div);
        ul.innerHTML = `<table><td><th>${p2.pnombre}</th><th>${p2.edad}</th><th>${p2.rut}</th><th>${p2.diagnostico}</th></td></table>`
    }
    else {
        nombre = buscarPaciente(p2.pnombre)


// var chris = new Paciente()
// var p1 = new Paciente("chris", 10, "11.546.543-6", "pcr1")
// var p2 = new Paciente("chris2", 20, "12.546.543-6", "pcr2")
// var p3 = new Paciente("chris3", 30, "13.546.543-6", "pcr3")
// var consultorio = new Consultorio("el mejor ", [p1, p2, p3])

// p1.setNombre("jaja")
// p1.setDiagnostico("jeje")
// p1.setEdad("jiji")
// p1.setRut("jojo")

// //modificar archivos
// console.log(consultorio.getNombre())
// consultorio.setNombre("el peor")
// console.log(consultorio.getNombre()) //get acceder datos
// p2.setNombre("christo")
// console.log(chris.getNombre())// set modifica arrays
// p2.setEdad("10000")
// console.log(chris.getEdad())
// p2.setRut("Cielo")
// console.log(chris.getRut())
// p2.setDiagnostico("Dios")
// console.log(chris.getDiagnostico())


// console.log(consultorio.getPacientes())

// var seba = new Paciente("seba", 36, "22.312.332-5", "alergia") // crear nuevo arrays
// consultorio.setPaciente(seba)// set agregar arrays
// console.log(consultorio.buscarPaciente("seba"))
// console.log(consultorio)    }
}
}
formulario.addEventListener('submit',evaluacion);

// // main.js
// const btn = document.getElementById('ingresar')
// var result = document.getElementById('resultado')
// btn.on('click', function () {
    
//     var accion = document.getElementById('accion')
//     var cnombre = document.getElementById('nombrec');
//     var pnombre = document.getElementById('nombrep');
//     var edad = document.getElementById('edad');
//     var rut = document.getElementById('rut');
//     var diagnostico = document.getElementById('diagnostico');
//     var pacientes1 = new Paciente(pnombre, edad, rut, diagnostico)
//     var consultorio1 = new Consultorio(cnombre, pacientes1)
//     var resultado 
// if (accion == "modificar") {
//     console.log(paciente1)
//     console.log(consultorio1)
//     resultado = `${consultorio1}`
//     result.innerHTML = resultado
//     console.log(resultado)

// }
// else if (accion == "nuevo"){
//     alert("Ingresa una operación válida y sus operandos")
//     }
// else {
// alert("Ingresa una operación válida y sus operandos")
// }
// })

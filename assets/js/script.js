function Consultorio(nombre, paciente) {
    this._nombre = function () {
        return nombre;
    };
    this._paciente = paciente || [];
}

function Paciente(nombre, edad, rut, diagnostico) {
    this._nombre = function () {
        return nombre;
    };
    this._edad = function () {
        return edad;
    };
    this._rut = function () {
        return rut;
    };
    this._diagnostico = function () {
        return diagnostico;
    };
}



 var paciente = ["nombre", "edad", "rut", "diagnostico"]

Consultorio.prototype.getNombreConsultorio = function () {
    return this._nombre();
    }
Paciente.prototype.getNombrePaciente = function () {
    return this._nombre();
    }
    
Consultorio.prototype.setNombreConsultorio = function (nombre) {
    this._nombre = function () {
    return nombre;
    }
    }
Paciente.prototype.setNombrePaciente = function (nombre) {
    this._nombre = function () {
    return nombre;
    }
    }

    Paciente.prototype.getEdadPaciente = function () {
        return this._edad();
        }

        Paciente.prototype.setEdadPaciente = function (edad) {
            this._edad = function () {
            return edad;
            }
            }




    var paciente1 = new Paciente("Christopher",23, "19.423.043-5", "cancer");
    var consultorio1 = new Consultorio('Consultorio medico', paciente1);
    console.log(paciente1);
    console.log(consultorio1);
    console.log(paciente1.getNombrePaciente());
    console.log(consultorio1.getNombreConsultorio());
    console.log(paciente1.getEdadPaciente());

    paciente1.setNombrePaciente('chris');
    console.log(paciente1.getNombrePaciente());



    }

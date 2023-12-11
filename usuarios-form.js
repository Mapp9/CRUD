
var tablaUsuario = localStorage.getItem("tablaUsuarioStorage");
tablaUsuario = JSON.parse(tablaUsuario);
if (tablaUsuario == null) {
    var tablaUsuario = [];
}



var idForm = localStorage.getItem("idForm");
idForm = JSON.parse(idForm);
if (idForm == null) {
    var idForm = 0;
}

cargarFormulario();

function guardar() {
    console.log("HA PRESIONADO GUARDAR...");
    var objUsuario = JSON.stringify({
        idUsuario: (idForm > 0) ? idForm : (tablaUsuario.length + 1),
        nombre: document.getElementById("txtNombre").value,
        telefono: document.getElementById("txtTelefono").value,
        email: document.getElementById("txtEmail").value,
        direccion: document.getElementById("txtDireccion").value,
        tipodocumento: document.getElementById("cboTipoDocumento").value,
        numerodocumento: document.getElementById("txtNDocumento").value
    });
    console.log(objUsuario);

    // editar
    if (idForm > 0) {
        for (const i in tablaUsuario) {
            var varUsuario = JSON.parse(tablaUsuario[i]);
            if (varUsuario.idUsuario == idForm) {
                tablaUsuario[i] = objUsuario;
                break;
            }
        }
    } else {
        // Nuevos usuarios
        tablaUsuario.push(objUsuario);
    }





    localStorage.setItem("tablaUsuarioStorage", JSON.stringify(tablaUsuario));
    window.location.replace("usuarios.html");
}

function cargarFormulario() {
    if (idForm > 0) {
        for (const i in tablaUsuario) {
            var varUsuario = JSON.parse(tablaUsuario[i]);
            if (varUsuario.idUsuario == idForm) {
                document.getElementById("txtIdUsuario").value = varUsuario.idUsuario;
                document.getElementById("txtNombre").value = varUsuario.nombre;
                document.getElementById("txtTelefono").value = varUsuario.telefono;
                document.getElementById("txtEmail").value = varUsuario.email;
                document.getElementById("txtDireccion").value = varUsuario.direccion;
                document.getElementById("cboTipoDocumento").value = varUsuario.tipodocumento;
                document.getElementById("txtNDocumento").value = varUsuario.numerodocumento;
                break;
            }
        }
    }
}

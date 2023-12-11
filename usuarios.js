
var tablaUsuario = localStorage.getItem("tablaUsuarioStorage");
tablaUsuario = JSON.parse(tablaUsuario);
if(tablaUsuario == null){
    var tablaUsuario = [];
}

function listar() {
    console.log("ingresando a listar...");

    var dataFila = '';

    if(tablaUsuario.length > 0){
        for(const i in tablaUsuario){
            var varUsuario = JSON.parse(tablaUsuario[i]);
            dataFila += "<tr>";
            dataFila += "<td>"+varUsuario.idUsuario+"</td>";
            dataFila += "<td>"+varUsuario.nombre+"</td>";
            dataFila += "<td>"+varUsuario.telefono+"</td>";
            dataFila += "<td>"+varUsuario.email+"</td>";
            dataFila += "<td>"+varUsuario.direccion+"</td>";
            dataFila += "<td>"+varUsuario.tipodocumento+"</td>";
            dataFila += "<td>"+varUsuario.numerodocumento+"</td>";
            dataFila += "<td>"+
                        "<button type='button' class='btn btn-warning' onclick='abrirForm("+varUsuario.idUsuario+")'>EDITAR</button>"+
                        "<button type='button' class='btn btn-danger' onclick='eliminarItem("+varUsuario.idUsuario+")'>ELIMINAR</button>"+
                        "</td>";

        dataFila +="</tr>";
        }
        document.getElementById("dataUsuarios").innerHTML=dataFila;
    }
    else{
        document.getElementById("dataUsuarios").innerHTML = "<tr><td colspan='7'>No hay datos</td></tr>";
    }

}



function abrirForm(idForm){
    localStorage.setItem("idForm", JSON.stringify(idForm));
    window.location.replace("usuarios-form.html");
}

function eliminarItem(idItem){
    for(const i in tablaUsuario){
        var varUsuario = JSON.parse(tablaUsuario[i]);
        if(varUsuario.idUsuario == idItem){
            tablaUsuario.splice(1,1);
            localStorage.setItem("tablaUsuarioStorage", JSON.stringify(tablaUsuario));
        }
    }
    listar()
}


$(document).ready(function(){
    $("#formularioAuto").validate({
        rules:{
            txtPatente:{
                required:true,
                minlength:3,
                maxlength:10
            },
            cboMarca:{
                required: true
            },
            txtAnio:{
                required:true,
                number:true,
                min:1950,
                max:2018
            }
        },
        messages:{
            txtPatente:{
                required:"Este campo es requerido xuxe...",
                minlength:"Minimo 3 letras",
                maxlength:"Maximo 10 letras"
            },
            cboMarca:{
                required:"Seleccione una marca"
            },
            txtAnio:{
                required:"Este campo es requerido",
                number:"Debe ingresar un numero",
                min:"El año debe ser mayor a 1950",
                max:"El año no debe ser mayor a 2018"
            }
        }
    });
})
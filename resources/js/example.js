$(document).ready(function () {

  /*PLUGIN DE VALIDACION*/
  $.validate({
    lang: 'es'
  });
  /*PLUGIN DE VALIDACION*/
       $("#clientes").DataTable({
         language: {
            "sProcessing":     "Procesando...",
            "sLengthMenu":     "Mostrar _MENU_ registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
            "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix":    "",
            "sSearch":         "Buscador General:",
            "sUrl":            "",
            "sInfoThousands":  ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        }
    },
    "aaSorting": [[ 0, "asc" ]]
        });

       $("#proveedores").DataTable({
          language: {
             "sProcessing":     "Procesando...",
             "sLengthMenu":     "Mostrar _MENU_ registros",
             "sZeroRecords":    "No se encontraron resultados",
             "sEmptyTable":     "Ningún dato disponible en esta tabla",
             "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
             "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
             "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
             "sInfoPostFix":    "",
             "sSearch":         "Buscador General:",
             "sUrl":            "",
             "sInfoThousands":  ",",
             "sLoadingRecords": "Cargando...",
             "oPaginate": {
                 "sFirst":    "Primero",
                 "sLast":     "Último",
                 "sNext":     "Siguiente",
                 "sPrevious": "Anterior"
         },
         "oAria": {
             "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
             "sSortDescending": ": Activar para ordenar la columna de manera descendente"
         }
     },
     "aaSorting": [[ 0, "asc" ]]
         });

         $("#vendedores").DataTable({
            language: {
               "sProcessing":     "Procesando...",
               "sLengthMenu":     "Mostrar _MENU_ registros",
               "sZeroRecords":    "No se encontraron resultados",
               "sEmptyTable":     "Ningún dato disponible en esta tabla",
               "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
               "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
               "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
               "sInfoPostFix":    "",
               "sSearch":         "Buscador General:",
               "sUrl":            "",
               "sInfoThousands":  ",",
               "sLoadingRecords": "Cargando...",
               "oPaginate": {
                   "sFirst":    "Primero",
                   "sLast":     "Último",
                   "sNext":     "Siguiente",
                   "sPrevious": "Anterior"
           },
           "oAria": {
               "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
               "sSortDescending": ": Activar para ordenar la columna de manera descendente"
           }
       },
       "aaSorting": [[ 0, "asc" ]]
           });


           $("#productos").DataTable({
              language: {
                 "sProcessing":     "Procesando...",
                 "sLengthMenu":     "Mostrar _MENU_ registros",
                 "sZeroRecords":    "No se encontraron resultados",
                 "sEmptyTable":     "Ningún dato disponible en esta tabla",
                 "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                 "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                 "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                 "sInfoPostFix":    "",
                 "sSearch":         "Buscador General:",
                 "sUrl":            "",
                 "sInfoThousands":  ",",
                 "sLoadingRecords": "Cargando...",
                 "oPaginate": {
                     "sFirst":    "Primero",
                     "sLast":     "Último",
                     "sNext":     "Siguiente",
                     "sPrevious": "Anterior"
             },
             "oAria": {
                 "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                 "sSortDescending": ": Activar para ordenar la columna de manera descendente"
             }
         },
         "aaSorting": [[ 0, "asc" ]]
             });

           $("#ventas_contado").DataTable({
              language: {
                 "sProcessing":     "Procesando...",
                 "sLengthMenu":     "Mostrar _MENU_ registros",
                 "sZeroRecords":    "No se encontraron resultados",
                 "sEmptyTable":     "Ningún dato disponible en esta tabla",
                 "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                 "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                 "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                 "sInfoPostFix":    "",
                 "sSearch":         "Buscador General:",
                 "sUrl":            "",
                 "sInfoThousands":  ",",
                 "sLoadingRecords": "Cargando...",
                 "oPaginate": {
                     "sFirst":    "Primero",
                     "sLast":     "Último",
                     "sNext":     "Siguiente",
                     "sPrevious": "Anterior"
             },
             "oAria": {
                 "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                 "sSortDescending": ": Activar para ordenar la columna de manera descendente"
             }
         },
         "aaSorting": [[ 0, "asc" ]]
             });
             
              

         $("#ventas_credito").DataTable({
            language: {
               "sProcessing":     "Procesando...",
               "sLengthMenu":     "Mostrar _MENU_ registros",
               "sZeroRecords":    "No se encontraron resultados",
               "sEmptyTable":     "Ningún dato disponible en esta tabla",
               "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
               "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
               "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
               "sInfoPostFix":    "",
               "sSearch":         "Buscador General:",
               "sUrl":            "",
               "sInfoThousands":  ",",
               "sLoadingRecords": "Cargando...",
               "oPaginate": {
                   "sFirst":    "Primero",
                   "sLast":     "Último",
                   "sNext":     "Siguiente",
                   "sPrevious": "Anterior"
           },
           "oAria": {
               "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
               "sSortDescending": ": Activar para ordenar la columna de manera descendente"
           }
       },
       "aaSorting": [[ 0, "asc" ]]
           });

})

/**************CODIGO PARA EL GIF DE CARGA DE LOS CORREOS****************/
var base_url= 'http://pruebastock.cpsobrino.mx/';

/*SECCION DE CLIENTES*/
$("#formulario_agregar_clientes").submit(function(e){
    e.preventDefault();

    var cliente = {
      nombre_cliente:    $('input[name="nombre_cliente"]').val(),
      dni_cliente:       $('input[name="dni_cliente"]').val(),
      direccion_cliente: $('textarea[name="direccion_cliente"]').val(),
      correo_cliente:    $('input[name="correo_cliente"]').val(),
      codigo_cliente:    $('input[name="codigo_cliente"]').val()
    };  

   $.ajax({
            url: base_url + "clientes/registrar",
            type:"POST",
            data: cliente,
            beforeSend: function() {
                     toastr.warning('Registrando Espere...');
                     toastr.clear()
              },
               success:function(resp){                
                toastr.success('El cliente ha sido Registrado', 'Cliente Registrado');

                $('#modal_agregar').hide('explode',{pieces: 4}, 1000);

                setTimeout(function(){
                   location.reload(); 
                 }, 2000);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

    return false;
  });


$(".boton_editar_clientes").click(function(){
    var id_cliente =   $(this).val();
   $.ajax({
            url: base_url + "clientes/vista_edicion/" + id_cliente,
            type:"GET",
            beforeSend: function() {
                     toastr.warning('Espere Cargando Información...');
                     toastr.clear()

              },
               success:function(resp){                               
                $("#modal_editar .modal-body").html(resp);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

  });

$("#formulario_editar_clientes").submit(function(e){
    e.preventDefault();

    var cliente = {
      id_cliente:        $('input[name="id_cliente"]').val(),
      nombre_cliente:    $('input[name="nombre_cliente_editar"]').val(),
      dni_cliente:       $('input[name="dni_cliente_editar"]').val(),
      direccion_cliente: $('textarea[name="direccion_cliente_editar"]').val(),
      correo_cliente:    $('input[name="correo_cliente_editar"]').val(),
      codigo_cliente:    $('input[name="codigo_cliente_editar"]').val()
    };  

   $.ajax({
            url: base_url + "clientes/editar",
            type:"POST",
            data: cliente,
            beforeSend: function() {
                     toastr.warning('Actualizando Espere...');
                     toastr.clear()
              },
               success:function(resp){                
                toastr.success('El cliente ha sido Actualizado', 'Cliente Actualizado');                
                $('#modal_editar').hide('explode',{pieces: 4}, 1000);
               setTimeout(function(){
                   location.reload(); 
                 }, 2000);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

    return false;
  });

$(".boton_eliminar_clientes").click(function(){
    var id_cliente =   $(this).val();
   $.ajax({
            url: base_url + "clientes/vista_eliminar/" + id_cliente,
            type:"GET",
            beforeSend: function() {
                     toastr.warning('Espere Cargando Información...');
                     toastr.clear()

              },
               success:function(resp){                               
                $("#modal_eliminar .modal-body").html(resp);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

  });

$("#formulario_eliminar_clientes").submit(function(e){
    e.preventDefault();

    var cliente = {
      id_cliente:        $('input[name="id_cliente"]').val(),     
    };  

   $.ajax({
            url: base_url + "clientes/eliminar",
            type:"POST",
            data: cliente,
            beforeSend: function() {
                     toastr.warning('Eliminando Espere...');
                     toastr.clear()
              },
               success:function(resp){                
                toastr.success('El cliente ha sido Eliminado', 'Cliente Eliminado');                
                $('#modal_editar').hide('explode',{pieces: 4}, 1000);
               setTimeout(function(){
                   location.reload(); 
                 }, 2000);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

    return false;
  });



/*SECCION DE CLIENTES*/

/*SECCION PROVEEDORES*/

$("#formulario_agregar_proveedores").submit(function(e){
    e.preventDefault();

    var proveedor = {
      nombre_proveedor:            $('input[name="nombre_proveedor"]').val(),
      direccion_proveedor_1:       $('textarea[name="direccion_proveedor_1"]').val(),
      direccion_proveedor_2:       $('textarea[name="direccion_proveedor_2"]').val(),
      ciudad_proveedor:            $('input[name="ciudad_proveedor"]').val(),
      pais_proveedor:              $('input[name="pais_proveedor"]').val(),
      codigo_postal:               $('input[name="codigo_postal"]').val(),
      contacto_proveedor:          $('input[name="contacto_proveedor"]').val(),
      numero_proveedor:            $('input[name="numero_proveedor"]').val(),
      numero_fax:                  $('input[name="numero_fax"]').val(),
      numero_ruc:                  $('input[name="numero_ruc"]').val(),
      web_proveedor:               $('input[name="web_proveedor"]').val()

    };  

   $.ajax({
            url: base_url + "proveedores/registrar",
            type:"POST",
            data: proveedor,
            beforeSend: function() {
                     toastr.warning('Registrando Espere...');
                     toastr.clear()
              },
               success:function(resp){                
                toastr.success('El proveedor ha sido Registrado', 'Proveedor Registrado');

                $('#modal_agregar').hide('explode',{pieces: 4}, 1000);

                setTimeout(function(){
                   location.reload(); 
                 }, 2000);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

    return false;
  });


$(".boton_editar_proveedores").click(function(){
    var id_proveedor =   $(this).val();
   $.ajax({
            url: base_url + "proveedores/vista_edicion/" + id_proveedor,
            type:"GET",
            beforeSend: function() {
                     toastr.warning('Espere Cargando Información...');
                     toastr.clear()

              },
               success:function(resp){                               
                $("#modal_editar .modal-body").html(resp);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

  });

$("#formulario_editar_proveedores").submit(function(e){
    e.preventDefault();

    var proveedor = {
      id_proveedor:                $('input[name="id_proveedor"]').val(),
      nombre_proveedor:            $('input[name="nombre_proveedor_editar"]').val(),
      direccion_proveedor_1:       $('textarea[name="direccion_proveedor_1_editar"]').val(),
      direccion_proveedor_2:       $('textarea[name="direccion_proveedor_2_editar"]').val(),
      ciudad_proveedor:            $('input[name="ciudad_proveedor_editar"]').val(),
      pais_proveedor:              $('input[name="pais_proveedor_editar"]').val(),
      codigo_postal:               $('input[name="codigo_postal_editar"]').val(),
      contacto_proveedor:          $('input[name="contacto_proveedor_editar"]').val(),
      numero_proveedor:            $('input[name="numero_proveedor_editar"]').val(),
      numero_fax:                  $('input[name="numero_fax_editar"]').val(),
      numero_ruc:                  $('input[name="numero_ruc_editar"]').val(),
      web_proveedor:               $('input[name="web_proveedor_editar"]').val()
    };  

   $.ajax({
            url: base_url + "proveedores/editar",
            type:"POST",
            data: proveedor,
            beforeSend: function() {
                     toastr.warning('Actualizando Espere...');
                     toastr.clear()
              },
               success:function(resp){                
                toastr.success('El proveedor ha sido Actualizado', 'Proveedor Actualizado');                
                $('#modal_editar').hide('explode',{pieces: 4}, 1000);
                
               setTimeout(function(){
                   location.reload(); 
                 }, 2000);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

    return false;
  });

$(".boton_eliminar_proveedores").click(function(){
    var id_proveedor =   $(this).val();
   $.ajax({
            url: base_url + "proveedores/vista_eliminar/" + id_proveedor,
            type:"GET",
            beforeSend: function() {
                     toastr.warning('Espere Cargando Información...');
                     toastr.clear()

              },
               success:function(resp){                               
                $("#modal_eliminar .modal-body").html(resp);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

  });

$("#formulario_eliminar_proveedores").submit(function(e){
    e.preventDefault();

     var proveedor = {
      id_proveedor:                $('input[name="id_proveedor"]').val(),   
    };  

   $.ajax({
            url: base_url + "proveedores/eliminar",
            type:"POST",
            data: proveedor,
            beforeSend: function() {
                     toastr.warning('Eliminando Espere...');
                     toastr.clear()
              },
               success:function(resp){                
                toastr.success('El proveedor ha sido Eliminado', 'Proveedor Eliminado');                
                $('#modal_editar').hide('explode',{pieces: 4}, 1000);
               setTimeout(function(){
                   location.reload(); 
                 }, 2000);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

    return false;
  });




/*SECCION PROVEEDORES*/


/*SECCION VENDEDORES*/

$("#formulario_agregar_vendedores").submit(function(e){
    e.preventDefault();

    var vendedor = {
      nombre_vendedor:    $('input[name="nombre_vendedor"]').val(),
      dni_vendedor:       $('input[name="dni_vendedor"]').val(),
      correo_vendedor:    $('input[name="correo_vendedor"]').val(),
     

    };  

   $.ajax({
            url: base_url + "vendedores/registrar",
            type:"POST",
            data: vendedor,
            beforeSend: function() {
                     toastr.warning('Registrando Espere...');
                     toastr.clear()
              },
               success:function(resp){                
                toastr.success('El vendedor ha sido Registrado', 'Vendedor Registrado');

                $('#modal_agregar').hide('explode',{pieces: 4}, 1000);

                setTimeout(function(){
                   location.reload(); 
                 }, 2000);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

    return false;
  });


$(".boton_editar_vendedores").click(function(){
    var id_vendedor =   $(this).val();
   $.ajax({
            url: base_url + "vendedores/vista_edicion/" + id_vendedor,
            type:"GET",
            beforeSend: function() {
                     toastr.warning('Espere Cargando Información...');
                     toastr.clear()

              },
               success:function(resp){                               
                $("#modal_editar .modal-body").html(resp);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

  });

$("#formulario_editar_vendedores").submit(function(e){
    e.preventDefault();

    var vendedor = {
      id_vendedor:        $('input[name="id_vendedor"]').val(),
      nombre_vendedor:    $('input[name="nombre_vendedor_editar"]').val(),
      dni_vendedor:       $('input[name="dni_vendedor_editar"]').val(),
      correo_vendedor:    $('input[name="correo_vendedor_editar"]').val(),
    };  

   $.ajax({
            url: base_url + "vendedores/editar",
            type:"POST",
            data: vendedor,
            beforeSend: function() {
                     toastr.warning('Actualizando Espere...');
                     toastr.clear()
              },
               success:function(resp){                
                toastr.success('El vendedor ha sido Actualizado', 'Proveedor Actualizado');                
                $('#modal_editar').hide('explode',{pieces: 4}, 1000);
                
               setTimeout(function(){
                   location.reload(); 
                 }, 2000);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

    return false;
  });

$(".boton_eliminar_vendedores").click(function(){
    var id_vendedor =   $(this).val();
   $.ajax({
            url: base_url + "vendedores/vista_eliminar/" + id_vendedor,
            type:"GET",
            beforeSend: function() {
                     toastr.warning('Espere Cargando Información...');
                     toastr.clear()

              },
               success:function(resp){                               
                $("#modal_eliminar .modal-body").html(resp);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

  });

$("#formulario_eliminar_vendedores").submit(function(e){
    e.preventDefault();

    var vendedor = {
      id_vendedor:        $('input[name="id_vendedor"]').val(),     
    };  

   $.ajax({
            url: base_url + "vendedores/eliminar",
            type:"POST",
            data: vendedor,
            beforeSend: function() {
                     toastr.warning('Eliminando Espere...');
                     toastr.clear()
              },
               success:function(resp){                
                toastr.success('El vendedor ha sido Eliminado', 'Vendedor Eliminado');                
                $('#modal_editar').modal('hide');
               setTimeout(function(){
                   location.reload(); 
                 }, 2000);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

    return false;
  });

/*SECCION VENDEDORES*/


/*SECCION PRODUCTOS*/
$("#formulario_agregar_productos").submit(function(e){
    e.preventDefault();

    var producto = {
      codigo_producto:          $('input[name="codigo_producto"]').val(),
      descripcion_producto:     $('input[name="descripcion_producto"]').val(),
      precio_producto:          $('input[name="precio_producto"]').val(),
      stock_producto:           $('input[name="stock_producto"]').val(),
      impuesto_producto:        $('input[name="impuesto_producto"]').val(),
      codigo_categoria:         $('input[name="codigo_categoria"]').val(),
      descripcion_categoria:    $('input[name="descripcion_categoria"]').val(),
      subcodigo_categoria:      $('input[name="subcodigo_categoria"]').val(),
      subdescripcion_categoria: $('input[name="subdescripcion_categoria"]').val(),
      codigo_bodega:            $('input[name="codigo_bodega"]').val(),
      descripcion_bodega:       $('input[name="descripcion_bodega"]').val(),
      codigo_fabricante:        $('input[name="codigo_fabricante"]').val(),
      provedores:               $('select[name="provedores[]"]').val(),
      

    };  
  

   $.ajax({
            url: base_url + "productos/registrar",
            type:"POST",
            data: producto,
            beforeSend: function() {
                     toastr.warning('Registrando Espere...');
                     toastr.clear()
              },
               success:function(resp){    
                toastr.success('El producto ha sido Registrado', 'Producto Registrado');
                $("#modal_agregar").hide('explode',{pieces: 4}, 1000);

                setTimeout(function(){
                   location.reload(); 
                 }, 2000);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

    return false;
  });

$(".boton_editar_productos").click(function(){
    var id_producto =   $(this).val();
   $.ajax({
            url: base_url + "productos/vista_edicion/" + id_producto,
            type:"GET",
            beforeSend: function() {
                     toastr.warning('Espere Cargando Información...');
                     toastr.clear()

              },
               success:function(resp){                               
                $("#modal_editar .modal-body").html(resp);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

  });


$(".boton_informacion_productos").click(function(){
    var id_producto =   $(this).val();
   $.ajax({
            url: base_url + "productos/vista_informacion/" + id_producto,
            type:"GET",
            beforeSend: function() {
                     toastr.warning('Espere Cargando Información...');
                     toastr.clear()
              },
               success:function(resp){                               
                $("#modal_informacion .modal-body").html(resp);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

  });

$("#formulario_editar_productos").submit(function(e){
    e.preventDefault();

    var producto = {
      id_producto:              $('input[name="id_producto"]').val(),
      codigo_producto:          $('input[name="codigo_producto_editar"]').val(),
      descripcion_producto:     $('input[name="descripcion_producto_editar"]').val(),
      precio_producto:          $('input[name="precio_producto_editar"]').val(),
      stock_producto:           $('input[name="stock_producto_editar"]').val(),
      impuesto_producto:        $('input[name="impuesto_producto_editar"]').val(),
      codigo_categoria:         $('input[name="codigo_categoria_editar"]').val(),
      descripcion_categoria:    $('input[name="descripcion_categoria_editar"]').val(),
      subcodigo_categoria:      $('input[name="subcodigo_categoria_editar"]').val(),
      subdescripcion_categoria: $('input[name="subdescripcion_categoria_editar"]').val(),
      codigo_bodega:            $('input[name="codigo_bodega_editar"]').val(),
      descripcion_bodega:       $('input[name="descripcion_bodega_editar"]').val(),
      codigo_fabricante:        $('input[name="codigo_fabricante_editar"]').val(),
      provedores:               $('select[name="provedores_editar[]"]').val(),
      

    };  
  

   $.ajax({
            url: base_url + "productos/editar",
            type:"POST",
            data: producto,
            beforeSend: function() {
                     toastr.warning('Actualizando Espere...');
                     toastr.clear()
              },
               success:function(resp){    
                toastr.success('El producto ha sido Actualizaado', 'Producto Actualizado');
                $("#modal_editar").hide('explode',{pieces: 4}, 1000);

                setTimeout(function(){
                   location.reload(); 
                 }, 2000);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

    return false;
  });

$(".boton_eliminar_productos").click(function(){
    var id_producto =   $(this).val();
   $.ajax({
            url: base_url + "productos/vista_eliminar/" + id_producto,
            type:"GET",
            beforeSend: function() {
                     toastr.warning('Espere Cargando Información...');
                     toastr.clear()

              },
               success:function(resp){                               
                $("#modal_eliminar .modal-body").html(resp);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

  });

$("#formulario_eliminar_productos").submit(function(e){
    e.preventDefault();

    var producto = {
      id_producto:        $('input[name="id_producto"]').val(),     
    };  

   $.ajax({
            url: base_url + "productos/eliminar",
            type:"POST",
            data: producto,
            beforeSend: function() {
                     toastr.warning('Eliminando Espere...');
                     toastr.clear()
              },
               success:function(resp){                
                toastr.success('El producto ha sido Eliminado', 'Producto Eliminado');                
                $('#modal_eliminar').hide('explode',{pieces: 4}, 1000);
               setTimeout(function(){
                   location.reload(); 
                 }, 2000);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

    return false;
  });
/*SECCION PRODUCTOS*/


/*******************************SECCION VENTAS DE CONTADO*****************************************/

$(document).ready(function() {
 
    $('#dni_cliente').autocomplete({
      source: base_url + "ventas/respuesta_clientes",
      minLength: 1,
      select: function(event,ui){
        event.preventDefault();
                       $('#dni_cliente').val(ui.item.value);
                       $('#id_cliente').val(ui.item.id_cliente);          
                       $('#nombre_cliente').val(ui.item.nombre_cliente);
                       $('#correo_cliente').val(ui.item.correo_cliente);                      
          }
               
    
    });

     $('#description_producto').autocomplete({
      source: base_url + "ventas/respuesta_productos",
      minLength: 1,
      select: function(event,ui){
        event.preventDefault();
                       $('#description_producto').val(ui.item.value);
                       $('#id_producto').val(ui.item.id_producto);          
                       $('#codigo_producto').val(ui.item.codigo_producto);
                       $('#informacion_producto').val(ui.item.precio_producto+'*'+ui.item.impuesto_producto);
          }
               
    
    });


   $('#nombre_vendedor').autocomplete({
      source: base_url + "ventas/respuesta_vendedores",
      minLength: 1,
      select: function(event,ui){
        event.preventDefault();
                       $('#nombre_vendedor').val(ui.item.value);
                       $('#id_vendedor').val(ui.item.id_vendedor);         
                      
          }
               
    
    });



 
  });

$("#nombre_vendedor" ).on( "keydown", function( event ) {
            if (event.keyCode== $.ui.keyCode.LEFT || event.keyCode== $.ui.keyCode.RIGHT || event.keyCode== $.ui.keyCode.UP || event.keyCode== $.ui.keyCode.DOWN || event.keyCode== $.ui.keyCode.DELETE || event.keyCode== $.ui.keyCode.BACKSPACE )
            {
                             $('#nombre_vendedor').val(""); 
                             $('#id_vendedor').val("");
                      
            }
            if (event.keyCode==$.ui.keyCode.DELETE){
                             $('#nombre_vendedor').val(""); 
                             $('#id_vendedor').val("");
            }
      }); 



$("#dni_cliente" ).on( "keydown", function( event ) {
            if (event.keyCode== $.ui.keyCode.LEFT || event.keyCode== $.ui.keyCode.RIGHT || event.keyCode== $.ui.keyCode.UP || event.keyCode== $.ui.keyCode.DOWN || event.keyCode== $.ui.keyCode.DELETE || event.keyCode== $.ui.keyCode.BACKSPACE )
            {
                             $('#id_cliente').val(""); 
                             $('#nombre_cliente').val("");
                             $('#correo_cliente').val("");                           
                      
            }
            if (event.keyCode==$.ui.keyCode.DELETE){
                             $('#id_cliente').val(""); 
                             $('#nombre_cliente').val("");
                             $('#correo_cliente').val("");  
            }
      }); 



$("#description_producto" ).on( "keydown", function( event ) {
            if (event.keyCode== $.ui.keyCode.LEFT || event.keyCode== $.ui.keyCode.RIGHT || event.keyCode== $.ui.keyCode.UP || event.keyCode== $.ui.keyCode.DOWN || event.keyCode== $.ui.keyCode.DELETE || event.keyCode== $.ui.keyCode.BACKSPACE )
            {
                             $('#id_producto').val(""); 
                             $('#codigo_producto').val("");
                             $('#informacion_producto').val("");
                      
            }
            if (event.keyCode==$.ui.keyCode.DELETE){
                             $('#id_producto').val(""); 
                             $('#codigo_producto').val("");
                             $('#informacion_producto').val("");
            }
      }); 


/*PARTE DE LA  TABLA DE VENTAS*/
/*************************PARTE DE AGREGAR PRODUCTOS********************/
$('#addon_cantidad').click(function(e){

/*INPUTS ESCONDIDOS*/
   var id_cliente                 = $('#id_cliente').val();
   var id_producto                = $('#id_producto').val();
   var informacion_producto       = $('#informacion_producto').val()
   var id_vendedor                = $('#id_vendedor').val();

/*INPUTS ESCONDIDOS*/  



/*INFORMACION MAS RELEVANTE*/
   var dni_cliente                = $('#dni_cliente').val();
   var description_producto       = $('#description_producto').val();
   var codigo_producto            = $('#codigo_producto').val();
   var comentario_venta           = $('#comentario_venta').val();
   var cantidad_comprado_producto = $('#cantidad_comprado_producto').val();

/*INFORMACION MAS RELEVANTE*/

/*SEPARACION DE CADENA*/

   var infoproducto               = informacion_producto.split("*");
/*SEPARACION DE CADENA*/



   if(dni_cliente == ''){
      toastr.warning('Ingrese un Cliente');
      return false
   }

   if(description_producto == ''){
      toastr.warning('Ingrese un Producto');
      return false
   }

 /*  if(comentario_venta == ''){
      toastr.warning('Ingrese un Comentario');
      return false
   }*/

   if(cantidad_comprado_producto == ''){
      toastr.warning('Ingrese una Cantidad');
      return false
   }

var precio_unitario = parseFloat(infoproducto[0]);
var impuesto_agregado = parseFloat(infoproducto[1]);
var cantidad_comprada_numero = Number(cantidad_comprado_producto); 
var total_sin_descuento = (precio_unitario*cantidad_comprada_numero)+((precio_unitario*cantidad_comprada_numero)*(impuesto_agregado/100));
var plantilla_tabla = `
<tr>
<td>
<input class='input_venta' readonly value='${codigo_producto}'></input>
<input type='hidden'  value='${id_cliente}' name='id_cliente'></input>
<input type='hidden'  value='${id_producto}' name='id_producto[]'></input>
<input type='hidden'  value='${id_vendedor}' name='id_vendedor'></input>
<input type='hidden'  value='${comentario_venta}' name='comentario_venta[]'></input>

</td>


<td><input class='input_venta' name='cantidad_comprado_producto[]' readonly value='${cantidad_comprada_numero}'></input></td>

<td>
<p>${description_producto}</p>
<p class="text-danger">${comentario_venta}</p>
</td>

<td><input class='input_venta' readonly  value='${precio_unitario}'></input></td>
<td><input class='input_venta' readonly value='${impuesto_agregado}'></input></td>
<td><input class='input_venta' type='hidden' name='precio_producto[]' value='${total_sin_descuento}'></input><p>${total_sin_descuento}</p></td>
<td><button type='button' class='btn btn-danger btn-remove-producto btn-block'><span class='fa fa-remove'></span></button></td>

</tr>
`
$("#tbventas tbody").append(plantilla_tabla);
sumar();

 $('#description_producto').val(null);
 $('#id_producto').val(null);          
 $('#codigo_producto').val(null);
 $('#informacion_producto').val(null);
 $('#comentario_venta').val(null);
 $('#cantidad_comprado_producto').val(null);

 $('#venta_boton').prop("disabled", false);
})
/*************************PARTE DE AGREGAR PRODUCTOS********************/


/******PARTE DESCUENTO*******/
$('#descuento_compra').on('keyup',function(){
    sumar();
})
/******PARTE DESCUENTO*******/



/*********REMOVER PRODUCTO*************/

$(document).on("click",".btn-remove-producto", function(){
    $(this).closest("tr").remove();
    sumar();

});

/*********REMOVER PRODUCTO*************/



/*******FUNCION PARA SUMAR*********/
function sumar(){
    subtotal = 0;
    $("#tbventas tbody tr").each(function(){
        subtotal = subtotal + Number($(this).find("td:eq(5)").text());
    });

    $("#subtotal").val(subtotal);
  
    descuento_compra = Number($("#descuento_compra").val());

    total = subtotal - (subtotal* (descuento_compra/100));
    $("#total").val(parseFloat(total).toFixed(4));
}
/*******FUNCION PARA SUMAR*********/
/*PARTE DE LA  TABLA DE VENTAS*/


$("#formulario_venta_contado").submit(function(e){
    e.preventDefault();

    var venta = {
      id_cliente:                          $('input[name="id_cliente"]').val(),
      id_producto:                         $('input[name="id_producto[]"]').map(function(){return $(this).val();}).get(),
      id_vendedor:                         $('input[name="id_vendedor"]').val(),
      cantidad_comprado_producto:          $('input[name="cantidad_comprado_producto[]"]').map(function(){return $(this).val();}).get(),
      precio_producto:                     $('input[name="precio_producto[]"]').map(function(){return $(this).val();}).get(),
      comentario_venta:                    $('input[name="comentario_venta[]"]').map(function(){return $(this).val();}).get(),
      descuento_compra:                    $('input[name="descuento_compra"]').val(),         
    };  
  

   $.ajax({
            url: base_url + "ventas/venta_contado",
            type:"POST",
            data: venta,
            beforeSend: function() {
                     toastr.warning('Realizando Venta Espere...');
                     toastr.clear()
              },
               success:function(resp){    
                toastr.success('Venta Realizada!!!!', 'Venta');
                $("#modal_agregar").hide('explode',{pieces: 4}, 1000); 
                setTimeout(function(){
                   location.reload(); 
                 }, 2000);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

    return false;
  });


$(".boton_informacion_venta").click(function(){
    var codigo_compra    =   $(this).val();
   $.ajax({
            url: base_url + "ventas/vista_informacion/" + codigo_compra,
            type:"GET",
            beforeSend: function() {
                     toastr.warning('Espere Cargando Información...');
                     toastr.clear()
              },
               success:function(resp){                               
                $("#modal_informacion .modal-body").html(resp);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

  });


/*******************************SECCION VENTAS DE CONTADO*****************************************/


/*SECCION VENTAS DE CREDITO*/
$("#formulario_venta_credito").submit(function(e){
    e.preventDefault();

    var venta = {
      id_cliente:                          $('input[name="id_cliente"]').val(),
      id_producto:                         $('input[name="id_producto[]"]').map(function(){return $(this).val();}).get(),
      id_vendedor:                         $('input[name="id_vendedor"]').val(),
      cantidad_comprado_producto:          $('input[name="cantidad_comprado_producto[]"]').map(function(){return $(this).val();}).get(),
      precio_producto:                     $('input[name="precio_producto[]"]').map(function(){return $(this).val();}).get(),
      comentario_venta:                    $('input[name="comentario_venta[]"]').map(function(){return $(this).val();}).get(),
      descuento_compra:                    $('input[name="descuento_compra"]').val(),         
    };  
  

   $.ajax({
            url: base_url + "ventas/venta_credito",
            type:"POST",
            data: venta,
            beforeSend: function() {
                     toastr.warning('Realizando Venta Espere...');
                     toastr.clear()
              },
               success:function(resp){    
                toastr.success('Venta Realizada!!!!', 'Venta');
                $("#modal_agregar").hide('explode',{pieces: 4}, 1000); 
                setTimeout(function(){
                   location.reload(); 
                 }, 2000);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

    return false;
  });

$(".boton_informacion_venta_credito").click(function(){
    var id_cliente    =   $(this).val();
   $.ajax({
            url: base_url + "ventas/vista_informacion_credito/" + id_cliente,
            type:"GET",
            beforeSend: function() {
                     toastr.warning('Espere Cargando Información...');
                     toastr.clear()
              },
               success:function(resp){                               
                $("#modal_informacion .modal-body").html(resp);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

  });


/****************ABONO**********************/

function abono_agregar($id_cliente){

    var abono_agregar = {
      id_cliente:                          $id_cliente    
    };  


   $.ajax({
            url: base_url + "ventas/vista_abono",
            type:"POST",
             data: abono_agregar,
            beforeSend: function() {
                     toastr.warning('Espere Cargando Información...');
                     toastr.clear()
              },
               success:function(resp){                               
                $("#modal_abono .modal-body").html(resp);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

}

function AgregarAbono(){
 
 var abono_id_cliente =  $("#abono_id_cliente").val();
 var abono_cantidad   =  Number($("#abono_cantidad").val());


 if(abono_cantidad == ''){
      toastr.warning('Ingrese una Cantidad');
      return false
  }

  if(isNaN(abono_cantidad)){
      toastr.warning('Ingrese una cantidad Valida');
      return false
  }

  if(abono_cantidad < 0){
      toastr.warning('Ingrese una cantidad Valida');
      return false
  }


  var datos_abono = {
      abono_id_cliente:  abono_id_cliente,
      abono_cantidad:   abono_cantidad
    }; 

     $.ajax({
            url: base_url + "ventas/agregar_abono",
            type:"POST",
             data: datos_abono,
            beforeSend: function() {
                     toastr.warning('Espere Guardando Información...');
                     toastr.clear()
              },
               success:function(resp){                               
                 toastr.success('Abono Realizado!!!!', 'Abono');
                 $('#modal_abono').modal('hide');
                  modalAgregar(abono_id_cliente);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });

}

function modalAgregar($id_cliente){

    var id_cliente    =   $id_cliente;
   $.ajax({
            url: base_url + "ventas/vista_informacion_credito/" + id_cliente,
            type:"GET",
            beforeSend: function() {
                     toastr.warning('Espere Cargando Información...');
                     toastr.clear()
              },
               success:function(resp){                               
                $("#modal_informacion .modal-body").html(resp);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });


}

/****************ABONO**********************/

/*SECCION VENTAS DE CREDITO*/




















function enviar_correo ($id,$id_seccion) {
  var id_usuario = $id;
  var id_seccion = $id_seccion;
            $.ajax({
                url: base_url + "usuario/enviar_correo/"+id_usuario,
                type:"POST",
                beforeSend: function() {
                     $('#gif_carga'+id_seccion).html("<center><img src='"+base_url+"/public/images/loader.gif' /></center>");
                     bootbox.dialog({
                         message: '<div class="text-center"><i class="fa fa-spin fa-spinner"></i> Enviando...</div>',
                         backdrop: true
                       });
                  },
                   success:function(resp){
                     bootbox.hideAll()
                     //$("#input_creado").append(resp);
                      $('#gif_carga'+id_seccion).html(
                      '<a title="Enviar Correo" onclick="enviar_correo('+id_usuario+')" class="btn btn-primary btn-check"><span class="fa fa-envelope"></span></a>'
                    );
                      bootbox.dialog({
                          message: '<div class="text-center">Mensaje Enviado</div>',
                          backdrop: true
                        });
                        setTimeout(function(){ bootbox.hideAll(); }, 2000); //Cierre automatico del modal

                },
                error:function(){
                  $('#gif_carga'+id_seccion).html("<h4 style='color:red;'>ERROR EN ENVIO</h4>");
                  bootbox.dialog({
                      message: '<div class="text-center">Ocurrio un error en el Envio</div>',
                      backdrop: true
                    });
                }

            });

};
/**************CODIGO PARA EL GIF DE CARGA DE LOS CORREOS****************/

/******CODIGO PARA EL MODAL DE LAS COMPRAS*********/
function datoscompra($compra){
  var compra = $compra;
        $.ajax({
            url: base_url + "pago/list_detalle/" + compra,
            type:"POST",
            beforeSend: function() {
                     $('#modal-default .modal-body').html("<center><img src='"+base_url+"/public/images/loader.gif' /></center>");                    
            },
            success:function(resp){
                $("#modal-default .modal-body").html(resp);
                $("#modal-default .modal-title").html('Información de la Compra');
                //alert(resp);
            }

        });
}

/******CODIGO PARA EL MODAL DE LAS COMPRAS*********/

/******CODIGO PARA EL MODAL DE LAS GRAFICAS*********/
function datosventas($id_compra,$year){
  var id_compra = $id_compra;
  var year      = $year;      
    datagrafico(base_url,year,id_compra);
        
}

function datagrafico(base_url,year,id_compra){
    namesMonth= ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Set","Oct","Nov","Dic"];
    $.ajax({
        url: base_url + "pago/getCharts/" + id_compra + "/" + year,
        type:"POST",
        data:{year: year},
        dataType:"json",
        success:function(data){
            var meses = new Array();
            var montos = new Array();
            $.each(data,function(key, value){
                meses.push(namesMonth[value.mes - 1]);
                valor = Number(value.monto);
                montos.push(valor);
            });
            graficar(meses,montos,year);
        }
    });
}

function graficar(meses,montos,year){
    Highcharts.chart('grafico', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Total Vendidos'
    },
    subtitle: {
        text: 'Año:' + year
    },
    xAxis: {
        categories: meses,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Ventas Totales'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">Ventas: </td>' +
            '<td style="padding:0"><b>{point.y:.2f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        },
        series:{
            dataLabels:{
                enabled:true,
                formatter:function(){
                    return Highcharts.numberFormat(this.y,2)
                }

            }
        }
    },
    series: [{
        name: 'Meses',
        data: montos

    }]
});
}

/******CODIGO PARA EL MODAL DE LAS GRAFICAS*********/

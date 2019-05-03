/*************Set default values for future Ajax requests********************/


$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

/*************Set default values for future Ajax requests********************/

$(document).ready( function () {
    $('#history_table').DataTable({    	
    	 "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json"
        },

        dom: 'Bfrtip',
        buttons: [
            'excel'
        ],
        scrollY:        "300px",
        scrollX:        true,
        scrollCollapse: true,
        paging:         false,
        fixedColumns:   {
            leftColumns: 2
        }


    });


    /***JAVASCRIPT OF FORMULARY***/

$("#invoice_currency_code").change(function() {

    if ($(this).val() == 'USD') {
        $("#exchange_rate").attr("readonly", false);         
    }else{
        $("#exchange_rate").attr("readonly", true);
        $("#exchange_rate").val(1); 
    }

    
});


$("#Vendor_id").change(function() {

     var value = $("#Vendor_id").val(); 

    $.ajax({
            type: "POST",
            dataType:'json',
            url: "vendorid",
            data: {"id": value},
            success:function(data){

                //#segment1
                $("#segment1").val(data.ruc);

            }
        });
    
});


/****FUNCIONES PARA RESUMIR****/
function sum_total_price(){
    var price_item                  = $('#price_item').val();
    var quantity_invoiced           = $('#quantity_invoiced').val();

    if (price_item =='') {
        price_item = 0;
    }

    var total = price_item * quantity_invoiced;

    $("#quantity_item").val(total);
}

$(document).on("click",".btn-remove-producto", function(){
    $(this).closest("tr").remove();
    sumar();

});



/****FUNCIONES PARA RESUMIR****/


$("#inventory_item_id").change(function() {

     var value = $("#inventory_item_id").val(); 

    $.ajax({
            type: "POST",
            dataType:'json',
            url: "inventoryitemid",
            data: {"id_inventory": value},
            success:function(data){              
                
                $("#price_item").val(data.price);

            }
        });

        sum_total_price();

    
});


$('#quantity_invoiced').keyup(function(){

        sum_total_price();

})

$('#button_add').click(function(){

    /***INPUTS WITH INFORMATION***/   
        var tax_id                = $('#tax_id').val();
        var tax_selected          = $("#tax_id option:selected").text();
        var tax_selected_number   = tax_selected.match(/\d/g).join("");
        var category_id           = $('#category_id').val();
        var inventory_item_id     = $('#inventory_item_id').val();
        var id_uom                = $('#id_uom').val(); 
        var quantity_invoiced     = $('#quantity_invoiced').val(); 
       
    /***INPUTS WITH INFORMATION***/

     if(inventory_item_id == ''){
      toastr.error('Seleccione un Producto');
      return false
   }

   if(id_uom == ''){
      toastr.error('Seleccione una Medida');
      return false
   }

    if(quantity_invoiced == ''){
      toastr.error('Debe Ingresar una Cantidad');
      return false
   }


/*********PLANTILLA PARA LA TABLA************/
var plantilla_tabla = `
<tr>

<td>
<input class='input_venta form-control' readonly ></input>
<input type='hidden'   name='id_producto[]'></input>
<input type='hidden'   name='comentario_venta[]'></input>

</td>


<td><input class='input_venta form-control' name='cantidad_comprado_producto[]' readonly ></input></td>

<td><input class='input_venta form-control' name='cantidad_comprado_producto[]' readonly ></input></td>


<td><input class='input_venta form-control' readonly  value=''></input></td>

<td><button type='button' class='btn btn-danger btn-block btn-remove-producto '>Eliminar</button></td>

</tr>
`
$("#tbsales tbody").prepend(plantilla_tabla);

/*********PLANTILLA PARA LA TABLA************/    
    
})





/***JAVASCRIPT OF FORMULARY***/

} );



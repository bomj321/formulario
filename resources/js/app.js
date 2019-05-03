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

function sumar(){
    subtotal = 0;
    $("#tbsales tbody tr").each(function(){
        subtotal = subtotal + Number($(this).find("td:eq(3)").text());
    });

    igv_item = 0;
    $("#tbsales tbody tr").each(function(){
        igv_item = igv_item + Number($(this).find("td:eq(4)").text());
    });

   
    var total_de_factura        = subtotal + igv_item;

    $("#total_linea").val(subtotal);
    $("#total_igv").val(igv_item);
    $("#total_factura").val(total_de_factura);  
}



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
        var inventory_item_id     = $("#inventory_item_id option:selected").text();
        var id_uom                = $("#id_uom option:selected").text(); 
        var quantity_invoiced     = $('#quantity_invoiced').val(); 
        var quantity_item         = $('#quantity_item').val(); 
        var igv                   = (quantity_item*tax_selected_number)/100;
        var monto_inafecto        = Number(quantity_item) + Number(igv);

       
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

<td class="text-center">
<strong>${inventory_item_id}</strong>
<input type='hidden' name='quantity_invoiced[]' ></input>
<input type='hidden' name='comentario_venta[]'></input>

</td>


<td class="text-center"><strong>${quantity_invoiced}</strong></td>

<td class="text-center"><strong>${id_uom}</strong></td>


<td class="text-center"><strong>${quantity_item}</strong></td>

<td class="text-center"><strong>${igv}</strong></td>
<td class="text-center"><strong>${monto_inafecto}</strong></td>


<td><button type='button' class='btn btn-danger btn-block btn-remove-producto '>Eliminar</button></td>

</tr>
`
$("#tbsales tbody").prepend(plantilla_tabla);

/*********PLANTILLA PARA LA TABLA************/    



sumar();
    
})





/***JAVASCRIPT OF FORMULARY***/

} );



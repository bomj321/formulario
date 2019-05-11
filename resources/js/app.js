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

        responsive: true       

    });


    $('#lines_all').DataTable({     
       "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json"
        },

        dom: 'Bfrtip',
        buttons: [
            'excel'
        ],
        responsive: true 

    });

     $('#bills_table').DataTable({     
       "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json"
        },       
        responsive: true 

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
            url: "/bills/vendorid",
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

    $("#quantity_item").val("");
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



$('#inventory_item_id').on('change', function() {

  var value = $("#inventory_item_id").val(); 

    $.ajax({
            type: "POST",
            dataType:'json',

            url: "/bills/inventoryitemid",
            data: {"id_inventory": value},
            success:function(data){              
                
                $("#price_item").val(data.price);
                $("#price_item_input").val(data.price);

            }
        });

/***DELAY FOR FUNCTION***/    

    setTimeout(function() { 
        sum_total_price();
    }, 1000);
/***DELAY FOR FUNCTION***/
        
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
        var inventory_item_id     = $("#inventory_item_id option:selected").val();
        var inventory_item_text   = $("#inventory_item_id option:selected").text();
        var item_description      = $("#item_description").val();
        var id_uom                = $("#id_uom option:selected").text(); 
        var id_uom_id             = $("#id_uom option:selected").val();
        var quantity_invoiced     = $('#quantity_invoiced').val(); 
        var quantity_item         = $('#quantity_item').val(); 
        var igv                   = (quantity_item*tax_selected_number)/100;
        var monto_inafecto        = Number(quantity_item) + Number(igv);

       
    /***INPUTS WITH INFORMATION***/

     if(inventory_item_text == ''){
      toastr.error('Seleccione un Producto');
      return false
   }

   if(id_uom_id == ''){
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
<strong>${inventory_item_text}</strong>
<input type='hidden' name='tax_id_input[]' value='${tax_id}'></input>
<input type='hidden' name='category_id_input[]' value='${category_id}'></input>
<input type='hidden' name='inventory_item_id_input[]' value='${inventory_item_id}'></input>
<input type='hidden' name='item_description_input[]' value='${item_description}'></input>
<input type='hidden' name='id_uom_input[]' value='${id_uom_id}'></input>
<input type='hidden' name='quantity_invoiced_input[]' value='${quantity_invoiced}'></input>
<input type='hidden' name='quantity_item_input[]' value='${quantity_item}'></input>
</td>


<td class="text-center"><strong>${quantity_invoiced}</strong></td>

<td class="text-center"><strong>${id_uom}</strong></td>


<td class="text-center"><strong>${quantity_item}</strong></td>

<td class="text-center"><strong>${igv}</strong></td>
<td class="text-center"><strong>${monto_inafecto}</strong></td>


<td>
<a type='button' class="btn btn-danger btn-sm btn-remove-producto">
    <span class="material-icons">delete</span>
</a>
</td>

</tr>
`
$("#tbsales tbody").prepend(plantilla_tabla);

/*********PLANTILLA PARA LA TABLA************/  

sumar();
    
})

$("#form_bills").submit(function(e){
 
   e.preventDefault();

      var ruc                 = $('#segment1').val();
      var invoice_num         = $('#Invoice_num').val(); 
      var glosa               = $('#description').val(); 
      var invoice_amount      = $('#invoice_amount').val();
       
    /***INPUTS WITH INFORMATION***/

     if(ruc == ''){
      toastr.error('Debe Ingresar un RUC');
      return false
    }

    if(invoice_num == ''){
      toastr.error('Debe Ingresar un numero de factura');
      return false
    }

    if(glosa == ''){
      toastr.error('Debe escribir una glosa');
      return false
    }

    if(invoice_amount == ''){
      toastr.error('Debes Ingresar un Importe');
      return false
    }


var parametros = new FormData($("#form_bills")[0]); 

 
   $.ajax({
            url: '/bills/store',
            type:"POST",
            contentType:false,
            processData:false,
            data: parametros,
            beforeSend: function() {
                     toastr.warning('Realizando Venta Espere...');
                     toastr.clear()
              },
               success:function(resp){    
                toastr.success(resp.message, 'Venta');
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

/************EDIT**************/

$("#form_bills_edit").submit(function(e){
 
   e.preventDefault();

      var id_bbdd             = $('#id_bill_bbdd').val();
      var ruc                 = $('#segment1').val();
      var invoice_num         = $('#Invoice_num').val(); 
      var glosa               = $('#description').val(); 
      var invoice_amount      = $('#invoice_amount').val();
       
    /***INPUTS WITH INFORMATION***/

     if(ruc == ''){
      toastr.error('Debe Ingresar un RUC');
      return false
    }

    if(invoice_num == ''){
      toastr.error('Debe Ingresar un numero de factura');
      return false
    }

    if(glosa == ''){
      toastr.error('Debe escribir una glosa');
      return false
    }

    if(invoice_amount == ''){
      toastr.error('Debes Ingresar un Importe');
      return false
    }


var parametros = new FormData($("#form_bills_edit")[0]); 

 
   $.ajax({
            url: '/bills/'+id_bbdd+'/update',
            type:"POST",
            contentType:false,
            processData:false,
            data: parametros,
            beforeSend: function() {
                     toastr.warning('Realizando Edicion Espere...');
                     toastr.clear()
              },
               success:function(resp){    
                toastr.success(resp.message, 'Venta');
                setTimeout(function(){
                  window.location.replace("/bills");
                 }, 2000);

            },
            error:function(){
             toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!') 
            }

      });
     return false;




  });




/************EDIT**************/




/***JAVASCRIPT OF FORMULARY***/

} );



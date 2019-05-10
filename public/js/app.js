/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*************Set default values for future Ajax requests********************/
$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});
/*************Set default values for future Ajax requests********************/

$(document).ready(function () {
  $('#history_table').DataTable({
    "language": {
      "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json"
    },
    dom: 'Bfrtip',
    buttons: ['excel'],
    scrollY: "300px",
    scrollX: true,
    scrollCollapse: true,
    paging: false,
    fixedColumns: {
      leftColumns: 2
    }
  });
  /***JAVASCRIPT OF FORMULARY***/

  $("#invoice_currency_code").change(function () {
    if ($(this).val() == 'USD') {
      $("#exchange_rate").attr("readonly", false);
    } else {
      $("#exchange_rate").attr("readonly", true);
      $("#exchange_rate").val(1);
    }
  });
  $("#Vendor_id").change(function () {
    var value = $("#Vendor_id").val();
    $.ajax({
      type: "POST",
      dataType: 'json',
      url: "/bills/vendorid",
      data: {
        "id": value
      },
      success: function success(data) {
        //#segment1
        $("#segment1").val(data.ruc);
      }
    });
  });
  /****FUNCIONES PARA RESUMIR****/

  function sum_total_price() {
    var price_item = $('#price_item').val();
    var quantity_invoiced = $('#quantity_invoiced').val();

    if (price_item == '') {
      price_item = 0;
    }

    var total = price_item * quantity_invoiced;
    $("#quantity_item").val("");
    $("#quantity_item").val(total);
  }

  $(document).on("click", ".btn-remove-producto", function () {
    $(this).closest("tr").remove();
    sumar();
  });

  function sumar() {
    subtotal = 0;
    $("#tbsales tbody tr").each(function () {
      subtotal = subtotal + Number($(this).find("td:eq(3)").text());
    });
    igv_item = 0;
    $("#tbsales tbody tr").each(function () {
      igv_item = igv_item + Number($(this).find("td:eq(4)").text());
    });
    var total_de_factura = subtotal + igv_item;
    $("#total_linea").val(subtotal);
    $("#total_igv").val(igv_item);
    $("#total_factura").val(total_de_factura);
  }
  /****FUNCIONES PARA RESUMIR****/


  $('#inventory_item_id').on('change', function () {
    var value = $("#inventory_item_id").val();
    $.ajax({
      type: "POST",
      dataType: 'json',
      url: "/bills/inventoryitemid",
      data: {
        "id_inventory": value
      },
      success: function success(data) {
        $("#price_item").val(data.price);
        $("#price_item_input").val(data.price);
      }
    });
    /***DELAY FOR FUNCTION***/

    setTimeout(function () {
      sum_total_price();
    }, 1000);
    /***DELAY FOR FUNCTION***/
  });
  $('#quantity_invoiced').keyup(function () {
    sum_total_price();
  });
  $('#button_add').click(function () {
    /***INPUTS WITH INFORMATION***/
    var tax_id = $('#tax_id').val();
    var tax_selected = $("#tax_id option:selected").text();
    var tax_selected_number = tax_selected.match(/\d/g).join("");
    var category_id = $('#category_id').val();
    var inventory_item_id = $("#inventory_item_id option:selected").val();
    var inventory_item_text = $("#inventory_item_id option:selected").text();
    var item_description = $("#item_description").val();
    var id_uom = $("#id_uom option:selected").text();
    var id_uom_id = $("#id_uom option:selected").val();
    var quantity_invoiced = $('#quantity_invoiced').val();
    var quantity_item = $('#quantity_item').val();
    var igv = quantity_item * tax_selected_number / 100;
    var monto_inafecto = Number(quantity_item) + Number(igv);
    /***INPUTS WITH INFORMATION***/

    if (inventory_item_text == '') {
      toastr.error('Seleccione un Producto');
      return false;
    }

    if (id_uom_id == '') {
      toastr.error('Seleccione una Medida');
      return false;
    }

    if (quantity_invoiced == '') {
      toastr.error('Debe Ingresar una Cantidad');
      return false;
    }
    /*********PLANTILLA PARA LA TABLA************/


    var plantilla_tabla = "\n<tr>\n\n<td class=\"text-center\">\n<strong>".concat(inventory_item_text, "</strong>\n<input type='hidden' name='tax_id_input[]' value='").concat(tax_id, "'></input>\n<input type='hidden' name='category_id_input[]' value='").concat(category_id, "'></input>\n<input type='hidden' name='inventory_item_id_input[]' value='").concat(inventory_item_id, "'></input>\n<input type='hidden' name='item_description_input[]' value='").concat(item_description, "'></input>\n<input type='hidden' name='id_uom_input[]' value='").concat(id_uom_id, "'></input>\n<input type='hidden' name='quantity_invoiced_input[]' value='").concat(quantity_invoiced, "'></input>\n<input type='hidden' name='quantity_item_input[]' value='").concat(quantity_item, "'></input>\n</td>\n\n\n<td class=\"text-center\"><strong>").concat(quantity_invoiced, "</strong></td>\n\n<td class=\"text-center\"><strong>").concat(id_uom, "</strong></td>\n\n\n<td class=\"text-center\"><strong>").concat(quantity_item, "</strong></td>\n\n<td class=\"text-center\"><strong>").concat(igv, "</strong></td>\n<td class=\"text-center\"><strong>").concat(monto_inafecto, "</strong></td>\n\n\n<td>\n<a type='button' class=\"btn btn-danger btn-sm btn-remove-producto\">\n    <span class=\"material-icons\">delete</span>\n</a>\n</td>\n\n</tr>\n");
    $("#tbsales tbody").prepend(plantilla_tabla);
    /*********PLANTILLA PARA LA TABLA************/

    sumar();
  });
  $("#form_bills").submit(function (e) {
    e.preventDefault();
    var ruc = $('#segment1').val();
    var invoice_num = $('#Invoice_num').val();
    var glosa = $('#description').val();
    var invoice_amount = $('#invoice_amount').val();
    /***INPUTS WITH INFORMATION***/

    if (ruc == '') {
      toastr.error('Debe Ingresar un RUC');
      return false;
    }

    if (invoice_num == '') {
      toastr.error('Debe Ingresar un numero de factura');
      return false;
    }

    if (glosa == '') {
      toastr.error('Debe escribir una glosa');
      return false;
    }

    if (invoice_amount == '') {
      toastr.error('Debes Ingresar un Importe');
      return false;
    }

    var parametros = new FormData($("#form_bills")[0]);
    $.ajax({
      url: '/bills/store',
      type: "POST",
      contentType: false,
      processData: false,
      data: parametros,
      beforeSend: function beforeSend() {
        toastr.warning('Realizando Venta Espere...');
        toastr.clear();
      },
      success: function success(resp) {
        toastr.success(resp.message, 'Venta');
        setTimeout(function () {
          location.reload();
        }, 2000);
      },
      error: function error() {
        toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!');
      }
    });
    return false;
  });
  /************EDIT**************/

  $("#form_bills_edit").submit(function (e) {
    e.preventDefault();
    var id_bbdd = $('#id_bill_bbdd').val();
    var ruc = $('#segment1').val();
    var invoice_num = $('#Invoice_num').val();
    var glosa = $('#description').val();
    var invoice_amount = $('#invoice_amount').val();
    /***INPUTS WITH INFORMATION***/

    if (ruc == '') {
      toastr.error('Debe Ingresar un RUC');
      return false;
    }

    if (invoice_num == '') {
      toastr.error('Debe Ingresar un numero de factura');
      return false;
    }

    if (glosa == '') {
      toastr.error('Debe escribir una glosa');
      return false;
    }

    if (invoice_amount == '') {
      toastr.error('Debes Ingresar un Importe');
      return false;
    }

    var parametros = new FormData($("#form_bills_edit")[0]);
    $.ajax({
      url: '/bills/' + id_bbdd + '/update',
      type: "POST",
      contentType: false,
      processData: false,
      data: parametros,
      beforeSend: function beforeSend() {
        toastr.warning('Realizando Edicion Espere...');
        toastr.clear();
      },
      success: function success(resp) {
        toastr.success(resp.message, 'Venta');
        setTimeout(function () {
          window.location.replace("/bills");
        }, 2000);
      },
      error: function error() {
        toastr.error('Ha ocurrido un error, intente más tarde.', 'Disculpenos!');
      }
    });
    return false;
  });
  /************EDIT**************/

  /***JAVASCRIPT OF FORMULARY***/
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Jose Ortega\Desktop\formulario\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\Users\Jose Ortega\Desktop\formulario\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });
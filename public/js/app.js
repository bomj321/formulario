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
      url: "vendorid",
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
    $("#quantity_item").val(total);
  }

  $(document).on("click", ".btn-remove-producto", function () {
    $(this).closest("tr").remove();
    sumar();
  });
  /****FUNCIONES PARA RESUMIR****/

  $("#inventory_item_id").change(function () {
    var value = $("#inventory_item_id").val();
    $.ajax({
      type: "POST",
      dataType: 'json',
      url: "inventoryitemid",
      data: {
        "id_inventory": value
      },
      success: function success(data) {
        $("#price_item").val(data.price);
      }
    });
    sum_total_price();
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
    var inventory_item_id = $('#inventory_item_id').val();
    var id_uom = $('#id_uom').val();
    var quantity_invoiced = $('#quantity_invoiced').val();
    /***INPUTS WITH INFORMATION***/

    if (inventory_item_id == '') {
      toastr.error('Seleccione un Producto');
      return false;
    }

    if (id_uom == '') {
      toastr.error('Seleccione una Medida');
      return false;
    }

    if (quantity_invoiced == '') {
      toastr.error('Debe Ingresar una Cantidad');
      return false;
    }
    /*********PLANTILLA PARA LA TABLA************/


    var plantilla_tabla = "\n<tr>\n\n<td>\n<input class='input_venta form-control' readonly ></input>\n<input type='hidden'   name='id_producto[]'></input>\n<input type='hidden'   name='comentario_venta[]'></input>\n\n</td>\n\n\n<td><input class='input_venta form-control' name='cantidad_comprado_producto[]' readonly ></input></td>\n\n<td><input class='input_venta form-control' name='cantidad_comprado_producto[]' readonly ></input></td>\n\n\n<td><input class='input_venta form-control' readonly  value=''></input></td>\n\n<td><button type='button' class='btn btn-danger btn-block btn-remove-producto '>Eliminar</button></td>\n\n</tr>\n";
    $("#tbsales tbody").prepend(plantilla_tabla);
    /*********PLANTILLA PARA LA TABLA************/
  });
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
<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', 'HistoryController@index')->name('histories');


/**********BILLS****************/
	Route::post('bills/store', 'ap_invoices_allController@store')
	->name('bills.store');


    Route::get('bills', 'ap_invoices_allController@index')
	->name('bills.index');


    Route::get('bills/create', 'ap_invoices_allController@create')
	->name('bills.create');

	 Route::get('bills/{bill}', 'ap_invoices_allController@show')
	->name('bills.show');


    Route::put('bills/{bill}', 'ap_invoices_allController@update')
	->name('bills.update');
   

    Route::get('bills/{bill}/edit', 'ap_invoices_allController@edit')
	->name('bills.edit');

	 Route::get('bills/{bill}/pdf', 'ap_invoices_allController@pdf')
	->name('bills.pdf');

/**********BILLS****************/

/******ROUTE FOR AJAX CALLS******/
Route::post('bills/vendorid', 'ap_invoices_allController@vendorid')
	->name('bills.vendorid');

Route::post('bills/inventoryitemid', 'ap_invoices_allController@inventoryitemid')
	->name('bills.inventoryitemid');

/******ROUTE FOR AJAX CALLS******/

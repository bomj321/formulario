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


    Route::put('bills/{role}', 'ap_invoices_allController@update')
	->name('bills.update');


    Route::post('bills/{role}', 'ap_invoices_allController@show')
	->name('bills.show');


    Route::get('bills/{role}', 'ap_invoices_allController@destroy')
	->name('bills.destroy');


    Route::get('bills/{role}/edit', 'ap_invoices_allController@edit')
	->name('bills.edit');

/**********BILLS****************/

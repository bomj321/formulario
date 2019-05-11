<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LinesController extends Controller
{
   public function index()
    {
    	$lines = DB::table('ap_invoice_lines_all')
        ->join('ap_tax_codes_all', 'ap_invoice_lines_all.tax_id', '=', 'ap_tax_codes_all.id')
        ->join('inv_category', 'ap_invoice_lines_all.category_id', '=', 'inv_category.id')
        ->join('inv_item', 'ap_invoice_lines_all.inventory_item_id', '=', 'inv_item.id')
        ->join('inv_uom', 'ap_invoice_lines_all.id_uom', '=', 'inv_uom.id')    
        ->select('ap_tax_codes_all.tax_rate as taxrate', 'inv_category.name as name_category', 'inv_item.description as item_description','inv_item.mat_edtc as mat_edtc', 'inv_uom.name as unit_item','ap_invoice_lines_all.*')
        //->where('ap_invoice_lines_all.invoice_id',$bill_db->id_bill)
        ->get();

      	return view('lines.index',compact('lines'));
        
    }
}

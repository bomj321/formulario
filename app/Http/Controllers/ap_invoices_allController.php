<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ap_invoices_allController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    	 $bills = DB::table('ap_invoices_all')->paginate(15);

    	 return view('bills.index',compact('bills'));
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {


    /****REGISTERS FOR SELECTS*****/
        $document_types = DB::table('ap_document_type')->pluck('name', 'id');
        $providers = DB::table('po_vendor')->pluck('vendor_name', 'vendor_id');
        $contractors = DB::table('contractors')->pluck('ruc', 'id');
        $rucs = DB::table('po_vendor')->pluck('segment1', 'vendor_id');
        $taxs = DB::table('ap_tax_codes_all')->pluck('name','id');
        $items = DB::table('inv_items')->pluck('mat_edtc','id');
        $categories = DB::table('inv_category')->pluck('name','id');
        $units = DB::table('inv_uom')->pluck('name','id');
       /****REGISTERS FOR SELECTS*****/

        return view('bills.create',compact('document_types','providers','contractors','rucs','taxs','items','categories','units'));





    }

    public function vendorid(Request $request)
    {   

        
        $provider = DB::table('po_vendor')
        ->select('segment1')
        ->where('vendor_id', '=', $request->id)
        ->first();



       
        $data = [          
          'ruc'      => $provider->segment1
        ];

        return response()->json($data);
    }

     public function inventoryitemid(Request $request)
    {   

        
        $item = DB::table('inv_items')
        ->select('list_item_price')
        ->where('id', '=', $request->id_inventory)
        ->first();



       
        $data = [          
          'price'      => $item->list_item_price
        ];

        return response()->json($data);
    }





    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ $bill
     * @return \Illuminate\Http\Response
     */
    
}

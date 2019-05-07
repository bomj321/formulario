<?php

namespace App\Http\Controllers;

use PDF;
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



        $bills = DB::table('ap_invoices_all')
                ->join('contractors', 'ap_invoices_all.Client_id', '=', 'contractors.id')
                ->join('ap_document_type', 'ap_invoices_all.document_id', '=', 'ap_document_type.id')
                ->join('po_vendor', 'ap_invoices_all.Vendor_id', '=', 'po_vendor.vendor_id')
                ->select('ap_invoices_all.id as id_bill','contractors.razon_social as name_client','ap_document_type.name as name_document','po_vendor.vendor_name as providers_name')
                ->paginate(15);



    	// $bills = DB::table('ap_invoices_all')->paginate(15);

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

    public function show($client)
    {
       
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


   
    public function store(Request $request)
    {

         DB::table('ap_invoices_all')->insert([
                         [
                             'Client_id'              => $request->Client_id, 
                             'document_id'            => $request->document_id, 
                             'Vendor_id'              => $request->Vendor_id, 
                             'segment1'               => $request->segment1, 
                             'Invoice_num'            => $request->Invoice_num,
                             'Invoice_date'           => $request->Invoice_date, 
                             'invoice_currency_code'  => $request->invoice_currency_code, 
                             'invoice_amount'         => $request->invoice_amount, 
                             'exchange_rate'          => $request->exchange_rate, 
                             'description'            => $request->description,
                             'exchange_date'          => date('Y-m-d')
                         ]                       
            ]);

        /**OBTAIN ID FROM LAST INSERT**/
            $last_id = DB::getPdo()->lastInsertId();
        /**OBTAIN ID FROM LAST INSERT**/

        for ($i=0; $i <count($request->tax_id_input) ; $i++) { 
                DB::table('ap_invoice_lines_all')->insert([
                         [
                              'invoice_id'         => $last_id,
                              'tax_id'             => $request->tax_id_input[$i], 
                              'category_id'        => $request->category_id_input[$i], 
                              'inventory_item_id'  => $request->inventory_item_id_input[$i], 
                              'item_description'   => $request->item_description_input[$i], 
                              'id_uom'             => $request->id_uom_input[$i],
                              'quantity_invoiced'  => $request->quantity_invoiced_input[$i],
                              'amount'             => $request->quantity_item_input[$i],                                  
                         ]                       
                ]); 
        }
      



         $data = [          
          'message'      => 'Venta Realizada',
        ];

        return response()->json($data);
    }

    public function pdf(){
        $data = ['title' => 'Welcome to HDTuto.com'];
        $pdf = PDF::loadView('bills.pdf', $data);
  
        return $pdf->download('bills.pdf');
    }

  
    
}

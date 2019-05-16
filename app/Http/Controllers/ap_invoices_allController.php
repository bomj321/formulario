<?php

namespace App\Http\Controllers;

use PDF;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

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

    	 return view('cp.bills.index',compact('bills'));
        
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
        $contractors = DB::table('contractors')->pluck('razon_social', 'id');
        $rucs = DB::table('po_vendor')->pluck('segment1', 'vendor_id');
        $taxs = DB::table('ap_tax_codes_all')->pluck('name','id');
        $items = DB::table('inv_item')->pluck('mat_edtc','id');
        $categories = DB::table('inv_category')->pluck('name','id');
        $units = DB::table('inv_uom')->pluck('name','id');
       /****REGISTERS FOR SELECTS*****/

        return view('cp.bills.create',compact('document_types','providers','contractors','rucs','taxs','items','categories','units'));
    }

    public function show($bill)
    {
       $bill_db = DB::table('ap_invoices_all')
        ->join('contractors', 'ap_invoices_all.Client_id', '=', 'contractors.id')
        ->join('ap_document_type', 'ap_invoices_all.document_id', '=', 'ap_document_type.id')
        ->join('po_vendor', 'ap_invoices_all.Vendor_id', '=', 'po_vendor.vendor_id')
        ->select('ap_invoices_all.id as id_bill','contractors.razon_social as name_client','ap_document_type.name as name_document','po_vendor.vendor_name as providers_name','ap_invoices_all.*')
        ->where('ap_invoices_all.id',$bill)
        ->first(); 


        $lines = DB::table('ap_invoice_lines_all')
        ->join('ap_tax_codes_all', 'ap_invoice_lines_all.tax_id', '=', 'ap_tax_codes_all.id')
        ->join('inv_category', 'ap_invoice_lines_all.category_id', '=', 'inv_category.id')
        ->join('inv_item', 'ap_invoice_lines_all.inventory_item_id', '=', 'inv_item.id')
        ->join('inv_uom', 'ap_invoice_lines_all.id_uom', '=', 'inv_uom.id')    
        ->select('ap_tax_codes_all.tax_rate as taxrate', 'inv_category.name as name_category', 'inv_item.description as item_description','inv_item.mat_edtc as mat_edtc', 'inv_uom.name as unit_item','ap_invoice_lines_all.*')
        ->where('ap_invoice_lines_all.invoice_id',$bill_db->id_bill)
        ->get();

         $files = DB::table('fnd_attached_documents')
         ->where('pk1_value', $bill_db->id_bill)
         ->get();

        

        $data = [

            'id_bill'               => $bill_db->id_bill,
            'name_client'           => $bill_db->name_client,
            'name_document'         => $bill_db->name_document,
            'providers_name'        => $bill_db->providers_name,
            'Invoice_num'           => $bill_db->Invoice_num,
            'Invoice_date'          => $bill_db->Invoice_date,
            'invoice_currency_code' => $bill_db->invoice_currency_code,
            'exchange_rate'         => $bill_db->exchange_rate,
            'invoice_amount'        => $bill_db->invoice_amount,
            'description'           => $bill_db->description,
            'lines'                 => $lines,
            'files'                 => $files

        ];

        return view('cp.bills.show', $data);
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

        
        $item = DB::table('inv_item')
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
                              'created_at'         => date('Y-m-d')                                  
                         ]                       
                ]); 
        }

        if (!empty($request->file('attached_documents')) ) {

          $files = $request->file('attached_documents');
                  for ($i=0; $i < count($files) ; $i++) { 
                    $storage_file  = time().'*'.$files[$i]->getClientOriginalName();
                    Storage::disk('public')->put($storage_file,File::get($files[$i]));

                         DB::table('fnd_attached_documents')->insert(
                           ['pk1_value' => $last_id, 'name_file' => $storage_file,'path_file' =>$storage_file,'description' => 'Archivos de Factura','created_by' => $last_id,'last_updated_by'=>$last_id,'updated_at'=>date('Y-m-d'),'created_at'=>date('Y-m-d')]
                        );


                 } 
        }
          

           $data = [          
            'message'      => 'Venta Realizada',

          ];

        return response()->json($data);
    }

    public function pdf($bill){

    $bill_db = DB::table('ap_invoices_all')
        ->join('contractors', 'ap_invoices_all.Client_id', '=', 'contractors.id')
        ->join('ap_document_type', 'ap_invoices_all.document_id', '=', 'ap_document_type.id')
        ->join('po_vendor', 'ap_invoices_all.Vendor_id', '=', 'po_vendor.vendor_id')
        ->select('ap_invoices_all.id as id_bill','contractors.razon_social as name_client','ap_document_type.name as name_document','po_vendor.vendor_name as providers_name','ap_invoices_all.*')
        ->where('ap_invoices_all.id',$bill)
        ->first(); 


    $lines = DB::table('ap_invoice_lines_all')
    ->join('ap_tax_codes_all', 'ap_invoice_lines_all.tax_id', '=', 'ap_tax_codes_all.id')
    ->join('inv_category', 'ap_invoice_lines_all.category_id', '=', 'inv_category.id')
    ->join('inv_item', 'ap_invoice_lines_all.inventory_item_id', '=', 'inv_item.id')
    ->join('inv_uom', 'ap_invoice_lines_all.id_uom', '=', 'inv_uom.id')    
    ->select('ap_tax_codes_all.tax_rate as taxrate', 'inv_category.name as name_category', 'inv_item.description as item_description','inv_item.mat_edtc as mat_edtc', 'inv_uom.name as unit_item','ap_invoice_lines_all.*')
    ->where('ap_invoice_lines_all.invoice_id',$bill_db->id_bill)
    ->get();
        

        $data = [

            'id_bill'               => $bill_db->id_bill,
            'name_client'           => $bill_db->name_client,
            'name_document'         => $bill_db->name_document,
            'providers_name'        => $bill_db->providers_name,
            'Invoice_num'           => $bill_db->Invoice_num,
            'Invoice_date'          => $bill_db->Invoice_date,
            'invoice_currency_code' => $bill_db->invoice_currency_code,
            'exchange_rate'         => $bill_db->exchange_rate,
            'invoice_amount'        => $bill_db->invoice_amount,
            'description'           => $bill_db->description,
            'lines'                 => $lines

        ];
        $pdf = PDF::loadView('cp.bills.pdf', $data);
  
        return $pdf->download('factura.pdf');

    }

      /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function edit($bill)
    {
         $bill_db = DB::table('ap_invoices_all')        
        ->where('ap_invoices_all.id',$bill)
        ->first(); 

        /****REGISTERS FOR SELECTS*****/
        $document_types = DB::table('ap_document_type')->pluck('name', 'id');
        $providers = DB::table('po_vendor')->pluck('vendor_name', 'vendor_id');
        $contractors = DB::table('contractors')->pluck('razon_social', 'id');
        $rucs = DB::table('po_vendor')->pluck('segment1', 'vendor_id');
        $taxs = DB::table('ap_tax_codes_all')->pluck('name','id');
        $items = DB::table('inv_item')->pluck('mat_edtc','id');
        $categories = DB::table('inv_category')->pluck('name','id');
        $units = DB::table('inv_uom')->pluck('name','id');
        /****REGISTERS FOR SELECTS*****/

         $lines = DB::table('ap_invoice_lines_all')
        ->join('ap_tax_codes_all', 'ap_invoice_lines_all.tax_id', '=', 'ap_tax_codes_all.id')
        ->join('inv_category', 'ap_invoice_lines_all.category_id', '=', 'inv_category.id')
        ->join('inv_item', 'ap_invoice_lines_all.inventory_item_id', '=', 'inv_item.id')
        ->join('inv_uom', 'ap_invoice_lines_all.id_uom', '=', 'inv_uom.id')    
        ->select('ap_tax_codes_all.tax_rate as taxrate','ap_tax_codes_all.id as taxrateid', 'inv_category.name as name_category', 'inv_item.description as item_description','inv_item.mat_edtc as mat_edtc', 'inv_uom.name as unit_item','ap_invoice_lines_all.*')
        ->where('ap_invoice_lines_all.invoice_id',$bill)
        ->get();




        return view('cp.bills.edit',compact('document_types','providers','contractors','rucs','taxs','items','categories','units','bill_db','lines'));        

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $bill)
    {


      /***************ELIMINATE REGISTERS*********************/

      DB::table('ap_invoices_all')->where('id', $bill)->delete();
      DB::table('ap_invoice_lines_all')->where('invoice_id', $bill)->delete();

      /***************ELIMINATE REGISTERS*********************/


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
                                'created_at'         => date('Y-m-d')                                  
                           ]                       
                  ]); 
          }

          if (!empty($request->file('attached_documents')) ) {

            $files = $request->file('attached_documents');
                    for ($i=0; $i < count($files) ; $i++) { 
                      $storage_file  = time().'*'.$files[$i]->getClientOriginalName();
                      Storage::disk('public')->put($storage_file,File::get($files[$i]));

                           DB::table('fnd_attached_documents')->insert(
                             ['pk1_value' => $last_id, 'name_file' => $storage_file,'path_file' =>$storage_file,'description' => 'Archivos de Factura','created_by' => $last_id,'last_updated_by'=>$last_id,'updated_at'=>date('Y-m-d'),'created_at'=>date('Y-m-d')]
                          );


                   } 
          }            

             $data = [          
              'message'      => 'Edición Realizada',

            ];

           return response()->json($data);
    }




     public function download($file)
    {
          $file_bbdd = DB::table('fnd_attached_documents')
          ->where('attached_document_id', $file)
          ->first();


          $path = Storage::disk('public')->path($file_bbdd->path_file);
          return response()->download($path);  
    }

  
    
}

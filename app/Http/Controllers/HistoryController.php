<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $histories = DB::table('inv_material_transactions')
            ->join('inv_item', 'inv_material_transactions.pattern_id', '=', 'inv_item.pattern_id')
            ->join('inv_transaction_types', 'inv_material_transactions.transaction_type_id', '=', 'inv_transaction_types.id')
            ->select('inv_material_transactions.id as id_history','inv_material_transactions.cod_mat_edtc as cod_mat_edtc','inv_material_transactions.pattern_id as patternid','inv_transaction_types.*', 'inv_item.*')
            ->groupBy('patternid')  
            ->get();


        $transanction_types = DB::table('inv_transaction_types')           
            ->get();           


        return view('histories.index',compact('histories','transanction_types'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
     * @param  \App\History  $history
     * @return \Illuminate\Http\Response
     */
    public function show(History $history)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\History  $history
     * @return \Illuminate\Http\Response
     */
    public function edit(History $history)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\History  $history
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, History $history)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\History  $history
     * @return \Illuminate\Http\Response
     */
    public function destroy(History $history)
    {
        //
    }
}

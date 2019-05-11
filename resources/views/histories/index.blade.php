@extends('layouts.app')


@section('content')
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="card-header">
                        Seccion de Reportes                
                </div>

                <div class="card-body">
                    <table class="stripe row-border order-column" id="history_table" style="max-width: 100%;">
                              <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Descripción</th>
                                    @foreach($transanction_types as $transanction_type)
                                     <th>{{ $transanction_type->name }}</th>
                                    @endforeach
                                    <th>Total de Transacciones</th>
                                </tr>
                              </thead>
                              <tbody>

                                 @foreach ($histories as $history)
                                        <tr>
                                              <th>{{ $history->mat_edtc }}</th>
                                              <th>{{ $history->description }}</th>
                                              <?php $sum_total = 0 ?>
                                              @foreach($transanction_types as $transanction_type)
                                                     <th>
                                                             <?php 
                                                            
                                                             $historia = DB::table('inv_material_transactions')
                                                                   ->select(DB::raw('count(transaction_type_id) as transaction_type_count'))
                                                                   ->where('item_id', '=', $history->item_id)
                                                                   ->where('transaction_type_id','=', $transanction_type->id)
                                                                   ->first(); 

                                                              if (!empty($historia->transaction_type_count) AND isset($historia->transaction_type_count))
                                                                   {
                                                                
                                                                     echo $historia->transaction_type_count;
                                                                     $sum_total+= $historia->transaction_type_count;

                                                                   }else{
                                                                     echo '0';
                                                                   }
                                                            ?>
                                                    </th>                                                     
                                              @endforeach
                                              <th>{{ $sum_total }}</th>

                                       </tr>                                        
                                 @endforeach
                              </tbody>
                    </table>
                             
                </div>
            </div>
        </div>
    </div>
</div>


@endsection

@extends('layouts.app')


@section('content')
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="card-header">
                        Seccion de Muestra                
                </div>

                <div class="card-body">
                    <table class="table table-striped table-sm" id="history_table">
                              <thead>
                                <tr>
                                  <th scope="col">ID</th>
                                  <th scope="col">Administrador del Area</th>
                                  <th scope="col">Descripción de la Venta</th>
                                  <th scope="col">#Trabajadores</th>
                                  <th scope="col">Precio</th>
                                  <th scope="col">Acciones</th>
                                </tr>
                              </thead>
                              <tbody>
                                    @foreach ($histories as $history)
                                        <tr>
                                          <th scope="row">{{ $history->id }}</th>
                                          <td>{{ $history->transaction_id }}</td>
                                          <td>{{ $history->item_id }}</td>
                                          <td>{{ $history->transaction_type_id }}</td>
                                          <td>{{ $history->transaction_line_iid }}</td>
                                          <td>                                           
                                              <a href="" class="btn btn-info btn-sm">
                                                  <span class="material-icons">edit</span>
                                              </a>
                                               
                                              <a href="" class="btn btn-danger btn-sm">
                                                   <span class="material-icons">delete</span>
                                              </a>
                                              
                                             
                                          </td>
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

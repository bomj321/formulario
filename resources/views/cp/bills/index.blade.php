@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                        Seccion de Facturas  
                        <a href="{{ route('bills.create') }}" class="btn btn-success pull-right">Crear Factura</a>   
                </div>

                <div class="card-body">
                    <table class="table table-striped display nowrap" id="bills_table">
                              <thead>
                                <tr>
                                  <th scope="col">Cliente</th>
                                  <th scope="col">Documento</th>
                                  <th scope="col">Vendedor</th>
                                  <th scope="col">Acciones</th>
                                </tr>
                              </thead>
                              <tbody>
                                   @if(count($bills) > 0)
                                          @foreach ($bills as $bill)
                                              <tr>
                                                <td>{{ $bill->name_client }}</td>
                                                <td>{{ $bill->name_document }}</td>
                                                <td>{{ $bill->providers_name }}</td>
                                                <td>
                                                    <a href="{{ route('bills.edit', $bill->id_bill) }}" class="btn btn-info btn-sm">
                                                        <span class="material-icons">edit</span>
                                                    </a>

                                                    <a href="{{ route('bills.show', $bill->id_bill) }}" class="btn btn-success btn-sm">
                                                         <span class="material-icons">visibility</span>
                                                    </a>

                                                    <a href="{{ route('bills.pdf', $bill->id_bill) }}" class="btn btn-danger btn-sm">
                                                         <span class="material-icons">picture_as_pdf</span>
                                                    </a>
                                                   
                                                </td>
                                              </tr>                                        
                                          @endforeach  

                                    @else
                                                <tr><td colspan="6"><center><strong>No hay registros Disponibles</strong></center></td></tr>

                                @endif          
                              </tbody>
                    </table>
                    <div class="pull-right">
                          {{ $bills->links() }}
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
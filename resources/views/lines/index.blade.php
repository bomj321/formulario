@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="card-header">
                        Lineas de Facturas  
                        <a href="" class="btn btn-success float-right">Crear Factura</a>   
                </div>

                <div class="card-body">
                    <table class="table table-striped table-sm display nowrap" id="lines_all">
                              <thead>
                                <tr>
                                  <th scope="col">#Factura</th>
                                  <th scope="col">Producto</th>
                                  <th scope="col">Cantidad</th>
                                  <th scope="col">Medida</th>
                                  <th scope="col">Subtotal</th>
                                  <th scope="col">IGV</th>
                                  <th scope="col">Mon.Inafecto</th>
                                  <th scope="col">Fecha</th>
                                </tr>
                              </thead>
                              <tbody>

                                <?php $sub_total = 0 ?>
                                <?php $igv_total = 0 ?>
                                @foreach($lines as $line)
                                    <tr>
                                      <th scope="row">{{ $line->invoice_id }}</th>
                                      <td>{{ $line->mat_edtc }}</td>
                                      <td>{{ $line->quantity_invoiced }}</td>
                                      <td>{{ $line->unit_item }}</td>
                                      <td>{{ $line->amount }}</td>
                                      <?php  $sub_total+= $line->amount; ?>
                                      <?php  $igv_total+= ($line->amount * $line->taxrate)/100; ?>
                                      <td>{{ ($line->amount * $line->taxrate)/100 }}</td>
                                      <td>{{ floatval($line->amount) + floatval((($line->amount * $line->taxrate)/100))  }}</td>
                                      <td>{{ $line->created_at }}</td>
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
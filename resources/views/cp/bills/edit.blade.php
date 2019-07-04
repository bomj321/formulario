@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
           <div class="panel panel-default">
                <div class="panel-heading">
                        Edicion de la  Factura
                        <a href="{{ route('bills.index') }}" class="btn btn-info pull-right">Volver</a>
                </div>

                <div class="card-body">
                     {{ Form::model($bill_db,['route' => ['bills.update', $bill_db->id],
                    'method' => 'POST','id'=>'form_bills_edit', 'enctype' => 'multipart/form-data']) }}                             

                                     @include('cp.bills.partials.form-edit')
                                    

                        <div class="form-group">
                            {{ Form::submit('Editar Factura', ['class' => 'btn btn-sm btn-primary']) }}
                        </div>

                        {{ Form::close() }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
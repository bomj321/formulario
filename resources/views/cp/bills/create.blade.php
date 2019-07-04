@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                        Creación de Factura
                        <a href="{{ route('bills.index') }}" class="btn btn-info pull-right">Volver</a>
                </div>

                <div class="panel-body">
                    {{ Form::open(['route' => 'bills.store','id'=>'form_bills', 'enctype' => 'multipart/form-data']) }}

                        @include('cp.bills.partials.form')                    
                        
                    {{ Form::close() }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
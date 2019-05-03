@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="card-header">
                        Creación de Factura
                        <a href="{{ route('bills.index') }}" class="btn btn-info float-right">Volver</a>
                </div>

                <div class="card-body">
                    {{ Form::open(['route' => 'bills.store']) }}

                        @include('bills.partials.form')
                        
                    {{ Form::close() }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
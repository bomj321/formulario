<div class="row">
	<div class="col-md-6">
		<div class="form-group">
			    {{ Form::label('Client_id', 'Cliente') }}
				{!! Form::select('Client_id',['leopard' => 'Leopard'],null,['class' => 'form-control']) !!}
		</div>
	</div>

	<div class="col-md-6">
		<div class="form-group">
			    {{ Form::label('ap_document_type', 'Tipo de Documento') }}
				{!! Form::select('ap_document_type',['1' => 'BASE CONTROL'],null,['class' => 'form-control']) !!}
		</div>
	</div>
	
</div>


<div class="row">
	<div class="col-md-6">
		<div class="form-group">
			    {{ Form::label('Vendor_id', 'Proveedores') }}
				{!! Form::select('Vendor_id',['186011' => 'FROZEN SAC'],null,['class' => 'form-control']) !!}
		</div>
	</div>

	<div class="col-md-6">
		<div class="form-group">
			    {{ Form::label('segment1', 'RUC') }}
				{!! Form::select('segment1',['20458874510' => '20458874510'],null,['class' => 'form-control']) !!}
		</div>
	</div>
	
</div>


<div class="row">
	<div class="col-md-6">
		<div class="form-group">
			    {{ Form::label('Invoice_num', 'Nro. de Factura') }}
	            {{ Form::text('Invoice_num', null, ['class' => 'form-control', 'id' => 'Invoice_num']) }}
		</div>
	</div>

	<div class="col-md-6">
		<div class="form-group">
			    {{ Form::label('Invoice_date', 'Fecha de Factura') }}
				{!! Form::date('Invoice_date', \Carbon\Carbon::now(),['class' => 'form-control']) !!}
		</div>
	</div>
	
</div>


<div class="row">
	<div class="col-md-6">
		<div class="form-group">
			     {{ Form::label('invoice_currency_code', 'Proveedores') }}
				 {!! Form::select('invoice_currency_code',['PEN' => 'PEN','USD' => 'USD'],null,['class' => 'form-control']) !!}
		</div>
	</div>

	<div class="col-md-6">
		<div class="form-group">
			    {{ Form::label('exchange_rate', 'Tipo de Cambio') }}
				{{ Form::text('exchange_rate', 1, ['class' => 'form-control', 'id' => 'exchange_rate','readonly']) }}
		</div>
	</div>
	
</div>


<div class="row">
	<div class="col-md-6">
		<div class="form-group">
			    {{ Form::label('description', 'Glosa') }}
	            {{ Form::text('description', null, ['class' => 'form-control', 'id' => 'description']) }}
		</div>
	</div>

	<div class="col-md-6">
		<div class="form-group">
			    {{ Form::label('ap_tax_codes_all', 'Código Impuesto') }}
				 {!! Form::select('ap_tax_codes_all',['IGV18' => 'IGV18','IGV17' => 'IGV17'],null,['class' => 'form-control']) !!}
		</div>
	</div>
	
</div>

<div class="form-group">
	{{ Form::submit('Generar Factura', ['class' => 'btn btn-sm btn-danger']) }}
</div>

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

<div class="row">
	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		<h5>Cabecera de la Factura</h5>
			<div class="form-group w-50">
				    {{ Form::label('attached_documents', 'Documentos Adjuntos') }}
				    {{ Form::file('attached_documents[]', ['class' => 'form-control', 'id' => 'attached_documents','multiple' => 'true']) }}


					

			</div>
	</div>
</div>
<hr>


<div class="row">
	<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
		<div class="form-group">
			    {{ Form::label('Client_id', 'Contratista') }}
				{!! Form::select('Client_id',$contractors,null,['class' => 'form-control']) !!}

				@foreach($errors->get('Client_id') as $message)
		 			 <div class="alert alert-danger message_error">
						<li>{{ $message }}</li>
					</div>
				@endforeach
		</div>
	</div>

	<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
		<div class="form-group">
			    {{ Form::label('document_id', 'Tipo de Documento') }}
				{!! Form::select('document_id',$document_types,null,['class' => 'form-control']) !!}

				@foreach($errors->get('document_id') as $message)
		 			 <div class="alert alert-danger message_error">
						<li>{{ $message }}</li>
					</div>
				@endforeach

		</div>
	</div>

	<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
		<div class="form-group">
			    {{ Form::label('Vendor_id', 'Proveedores') }}
				{!! Form::select('Vendor_id',$providers,null,['class' => 'form-control','id'=>'Vendor_id','placeholder' => 'Escoje un Proveedor']) !!}

				@foreach($errors->get('Vendor_id') as $message)
		 			 <div class="alert alert-danger message_error">
						<li>{{ $message }}</li>
					</div>
				@endforeach
		</div>
	</div>

	<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
		<div class="form-group">

			    {{ Form::label('segment1', 'RUC') }}
	            {{ Form::text('segment1', null, ['class' => 'form-control', 'id' => 'segment1' ,'readonly']) }}

				@foreach($errors->get('segment1') as $message)
		 			 <div class="alert alert-danger message_error">
						<li>{{ $message }}</li>
					</div>
				@endforeach
		</div>
	</div>
	
</div>


<div class="row">
	

	

	<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
		<div class="form-group">
			    {{ Form::label('Invoice_num', 'Nro. de Factura') }}
	            {{ Form::text('Invoice_num', null, ['class' => 'form-control', 'id' => 'Invoice_num']) }}

	            @foreach($errors->get('Invoice_num') as $message)
		 			 <div class="alert alert-danger message_error">
						<li>{{ $message }}</li>
					</div>
				@endforeach
		</div>
	</div>

	<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
		<div class="form-group">
			    {{ Form::label('Invoice_date', 'Fecha de Factura') }}
				{!! Form::date('Invoice_date', \Carbon\Carbon::now(),['class' => 'form-control']) !!}

				@foreach($errors->get('Invoice_date') as $message)
		 			 <div class="alert alert-danger message_error">
						<li>{{ $message }}</li>
					</div>
				@endforeach
		</div>
	</div>

	<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
		<div class="form-group">
			     {{ Form::label('invoice_currency_code', 'Moneda') }}
				 {!! Form::select('invoice_currency_code',['PEN' => 'PEN','USD' => 'USD'],null,['class' => 'form-control']) !!}

				@foreach($errors->get('invoice_currency_code') as $message)
		 			 <div class="alert alert-danger message_error">
						<li>{{ $message }}</li>
					</div>
				@endforeach
		</div>
	</div>

	<div class="col-lg-1 col-md-1 col-sm-12 col-xs-12">
		<div class="form-group">
			    {{ Form::label('invoice_amount', 'Importe') }}
				{{ Form::text('invoice_amount', null, ['class' => 'form-control', 'id' => 'invoice_amount']) }}

				@foreach($errors->get('invoice_amount') as $message)
		 			 <div class="alert alert-danger message_error">
						<li>{{ $message }}</li>
					</div>
				@endforeach
		</div>
	</div>


	<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
		<div class="form-group">
			    {{ Form::label('exchange_rate', 'Tipo de Cambio') }}
				{{ Form::text('exchange_rate', 1, ['class' => 'form-control', 'id' => 'exchange_rate','readonly']) }}

				@foreach($errors->get('exchange_rate') as $message)
		 			 <div class="alert alert-danger message_error">
						<li>{{ $message }}</li>
					</div>
				@endforeach
		</div>
	</div>

	<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
		<div class="form-group">
			    {{ Form::label('description', 'Glosa') }}
	            {{ Form::text('description', null, ['class' => 'form-control', 'id' => 'description']) }}

	            @foreach($errors->get('description') as $message)
		 			 <div class="alert alert-danger message_error">
						<li>{{ $message }}</li>
					</div>
				@endforeach
		</div>
	</div>
	
	
</div>




<!---------------------------DETALLES DE LA FACTURA------------------------------>

<div class="row">
	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		<h5>Detalles de la Factura</h5>
	</div>
</div>
<hr>

<div class="border border-danger mb-3 p-1 rounded">

		<div class="row">
			<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
				<div class="form-group">
					    {{ Form::label('tax_id', 'Cod Impto') }}
						{!! Form::select('tax_id',$taxs,null,['class' => 'form-control', 'id' => 'tax_id']) !!}
						
				</div>
			</div>

			<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
				<div class="form-group">
					    {{ Form::label('category_id', 'Categoría') }}
						{!! Form::select('category_id',$categories,null,['class' => 'form-control', 'id' => 'category_id']) !!}				

				</div>
			</div>

			<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
				<div class="form-group">
					    {{ Form::label('inventory_item_id', 'Inventario') }}
						{!! Form::select('inventory_item_id',$items,null,['class' => 'form-control','placeholder' => 'Escoje un Articulo']) !!}

						
						
				</div>
			</div>

			<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
				<div class="form-group">
					    {{ Form::label('price_item', 'Precio') }}
			            {{ Form::text('price_item', null, ['class' => 'form-control', 'id' => 'price_item']) }}
				</div>
			</div>

			<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
				<div class="form-group">
					    {{ Form::label('item_description', 'Descripción') }}
			            {{ Form::text('item_description', null, ['class' => 'form-control', 'id' => 'item_description']) }}
				</div>
			</div>
			
		</div>

		<div class="row">
			<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
				<div class="form-group">
					    {{ Form::label('id_uom', 'UDM') }}
						{!! Form::select('id_uom',$units,null,['class' => 'form-control','placeholder' => 'Escoje una unidad', 'id' => 'id_uom']) !!}
						
				</div>
			</div>
			
			<div class="col-lg-1 col-md-1 col-sm-12 col-xs-12">
				<div class="form-group">
					    {{ Form::label('quantity_invoiced', 'Cantidad') }}
			            {{ Form::text('quantity_invoiced', null, ['class' => 'form-control', 'id' => 'quantity_invoiced']) }}
				</div>
			</div>

			<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
				<div class="form-group">
					   {{ Form::label('quantity_item', 'Total') }}
			           {{ Form::text('quantity_item', null, ['class' => 'form-control', 'id' => 'quantity_item','disabled']) }}
						
				</div>
			</div>

			<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 button-add">
				<div class="form-group">
					   {{ Form::button('Agregar Producto', ['class' => 'btn btn-warning','id' => 'button_add']) }}
				</div>
			</div>
			
		</div>
<!---------------------TABLA DE COMPRAS------------------------>
<div class="table-responsive">

		<table class="table" id="tbsales">
			  <thead class="table-info">
			    <tr>
			      <th scope="col">Código del Producto</th>
			      <th scope="col">Cantidad</th>
			      <th scope="col">Medida</th>
			      <th scope="col">Subtotal</th>
			      <th scope="col">IGV</th>
			      <th scope="col">Monto Inafecto</th>
			      <th scope="col">Acciones</th>
			    </tr>
			  </thead>
			  <tbody>
			   
			    <tr>
			     <td colspan="7"></td>
      			
			    </tr>		   			   

			    <tr>
			     <td colspan="6"><strong class="float-right">Total Lineas:</strong></td>
      			 <td><input class='input_venta form-control' readonly id="total_linea"></td>
			    </tr>

			    <tr>
			     <td colspan="6"><strong class="float-right">Total igv:</strong></td>
      			 <td><input class='input_venta form-control' readonly id="total_igv"></td>
			    </tr>

			    <tr>
			     <td colspan="6"><strong class="float-right">Total Factura:</strong></td>
      			 <td><input class='input_venta form-control' readonly id="total_factura"></td>
			    </tr>
			  </tbody>
		</table>		
</div>

<!---------------------TABLA DE COMPRAS------------------------>	
</div>

<div class="form-group">
        {{ Form::submit('Generar Factura', ['class' => 'btn btn-sm btn-danger']) }}
</div>


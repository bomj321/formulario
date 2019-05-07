<!DOCTYPE html>
<html>
<head>
	<!--BOOTSTRAP-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
   <!--BOOTSTRAP-->
   <!-- Styles -->   
	<style>
		.p_factura{
			font-size: 10px;
		}
	</style>
  
	<title>Factura</title>
</head>
<body>

	<div class="container">
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<h4 class="btn-outline-danger">Datos Generales de la Factura</h4>
				<hr>
				<p class="p_factura mb-1"><strong>ID de la Factura:</strong> {{ $id_bill }}</p>
				<p class="p_factura mb-1"><strong>Nombre del Cliente:</strong> {{ $name_client }}</p>
				<p class="p_factura mb-1"><strong>Nombre del Documento:</strong> {{ $name_document }}</p>
				<p class="p_factura mb-1"><strong>Nombre del Proveedor:</strong> {{ $providers_name }}</p>
				<p class="p_factura mb-1"><strong>Número de la Factura:</strong> {{ $Invoice_num }}</p>
				<p class="p_factura mb-1"><strong>Fecha de la Factura:</strong> {{ $Invoice_date }}</p>
				<p class="p_factura mb-1"><strong>Moneda:</strong> {{ $invoice_currency_code }}</p>
				<p class="p_factura mb-1"><strong>Tasa de Cambio:</strong> {{ $exchange_rate }}</p>
				<p class="p_factura mb-1"><strong>Monto de la Factura:</strong> {{ $invoice_amount }}</p>
				<p class="p_factura mb-1"><strong>Descripción de la Factura:</strong> {{ $description }}</p>	
  				
  			
		    </div>
		</div>

		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				@foreach($lines as $line)
					<h4 class="btn-outline-danger">{{ $line->taxrate }}</h4>
					<hr>
				@endforeach
			</div>
		</div>
		

	</div>
	
</body>
</html>
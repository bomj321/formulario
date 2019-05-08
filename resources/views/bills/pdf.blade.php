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
				<table class="table table-striped">
					  <thead>
					    <tr>
					      <th scope="col">#Producto</th>
					      <th scope="col">Cantidad</th>
					      <th scope="col">Medida</th>
					      <th scope="col">Subtotal</th>
					      <th scope="col">IGV</th>
					      <th scope="col">Mon. Inafecto</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <th scope="row">1</th>
					      <td>Mark</td>
					      <td>Otto</td>
					      <td>@mdo</td>
					      <td>@mdo</td>
					      <td>@mdo</td>
					    </tr>
					    <tr>
					      <th scope="row">2</th>
					      <td>Jacob</td>
					      <td>Thornton</td>
					      <td>@fat</td>
					      <td>@mdo</td>
					      <td>@mdo</td>
					    </tr>
					    <tr>
					      <th scope="row">3</th>
					      <td>Larry</td>
					      <td>the Bird</td>
					      <td>@twitter</td>
					      <td>@mdo</td>
					      <td>@mdo</td>
					    </tr>

					    <tr>
			     			<td colspan="5"></td>
      			
			   			 </tr>		   			   

					    <tr>
					     <td colspan="5"><strong class="float-right">Total Lineas:</strong></td>
		      			 <td>25.76</td>
					    </tr>

					    <tr>
					     <td colspan="5"><strong class="float-right">Total igv:</strong></td>
		      			 <td>33.33</td>
					    </tr>

					    <tr>
					     <td colspan="5"><strong class="float-right">Total Factura:</strong></td>
		      			 <td>155</td>
					    </tr>



					  </tbody>
				</table>
				<!--@foreach($lines as $line)
					<h4 class="btn-outline-danger">{{ $line->taxrate }}</h4>
					<hr>
				@endforeach-->
			</div>
		</div>
		

	</div>
	
</body>
</html>
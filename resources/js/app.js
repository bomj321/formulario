$(document).ready( function () {
    $('#history_table').DataTable({    	
    	 "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json"
        },

        dom: 'Bfrtip',
        buttons: [
            'excel'
        ],
        scrollY:        "300px",
        scrollX:        true,
        scrollCollapse: true,
        paging:         false,
        fixedColumns:   {
            leftColumns: 2
        }


    });
} );
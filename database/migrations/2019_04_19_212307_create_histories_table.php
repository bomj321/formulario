<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('histories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('transaction_id')->unsigned();
            $table->integer('item_id');
            $table->integer('transaction_type_id');
            $table->integer('transaction_line_iid');
            $table->decimal('transaction_quantity', 10, 2)->default('0.00');
            $table->string('transaction_uom', 15)->collation('utf8_unicode_ci');
            $table->dateTime('transaction_date'); 
            $table->string('cod_mat_edtc', 25)->collation('utf8_unicode_ci');
            $table->integer('beneficiary')->nullable($value = true);
            $table->integer('num_folio')->nullable($value = true);
            $table->string('cod_type_transaction', 50)->collation('utf8_unicode_ci')->nullable($value = true);
            $table->integer('brand_id')->unsigned();
            $table->string('num_folio_user', 255)->collation('utf8_unicode_ci')->nullable($value = true);
            $table->integer('created_by')->unsigned();
            $table->integer('last_updated_by')->unsigned();
            $table->timestamps();

            $table->foreign('item_id')->references('id')->on('articles')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('transaction_type_id')->references('id')->on('transanction_types')->onDelete('cascade')->onUpdate('cascade');     

        });        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('histories');
    }

}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBillsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bills', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('beneficiary');
            $table->integer('document_type');
            $table->integer('provider');
            $table->string('Ruc', 100);
            $table->string('nro_bill', 100);
            $table->string('invoice_date', 100);
            $table->string('currency', 50);
            $table->string('amount', 50);
            $table->string('glosa', 100);
            $table->string('state', 50);
            $table->string('exchange_rate', 100);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bills');
    }
}

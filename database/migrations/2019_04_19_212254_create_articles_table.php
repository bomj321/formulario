<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->integer('id')->autoIncrement();
            $table->integer('idcontrol')->nullable($value = true);
            $table->integer('idcentercost')->nullable($value = true);
            $table->integer('idarea')->nullable($value = true);
            $table->integer('idwork')->nullable($value = true);
            $table->string('mat_edtc', 25);
            $table->string('description', 250);
            $table->integer('cod_uom');
            $table->string('size', 25)->nullable($value = true);
            $table->integer('idbrand');
            $table->string('serial', 25)->nullable($value = true);
            $table->integer('idstatus')->nullable($value = true);
            $table->integer('idcategory')->nullable($value = true);
            $table->decimal('list_item_price', 10, 2)->default('0.00');
            $table->integer('is_fixedasset')->default('0');
            $table->string('path_image', 250)->nullable($value = true);
            $table->tinyinteger('enabled')->default('1');
            $table->tinyinteger('flag_inventory')->default('1');
            $table->integer('retro_days');
            $table->date('date_mov_integer')->nullable($value = true);
            $table->string('comment', 11)->nullable($value = true);
            $table->integer('stk_min_alert')->default('99999');
            $table->integer('idtransaction')->nullable($value = true);
            $table->integer('idtypedocmov')->nullable($value = true);
            $table->integer('idauth')->nullable($value = true);
            $table->string('number_sheet', 10)->nullable($value = true);
            $table->integer('created_by');
            $table->integer('last_updated_by');
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
        Schema::dropIfExists('articles');
    }

 
}

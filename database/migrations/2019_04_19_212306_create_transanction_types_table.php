<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransanctionTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transanction_types', function (Blueprint $table) {
            $table->integer('id')->autoIncrement();
            $table->string('name', 50)->unique();
            $table->string('code', 50)->unique();
            $table->string('description', 250)->nullable($value = true);
            $table->string('stock', 10);
            $table->tinyinteger('enabled')->default('1');
            $table->string('ult_corr', 100)->default('0');
            $table->integer('flag_system');
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
        Schema::dropIfExists('transanction_types');
    }

}

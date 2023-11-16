<?php

use App\Models\Felhasznalo;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('karakters', function (Blueprint $table) {
            $table->id('KID');
            $table->string('Kép')->default('ittleszvalamikor egy kép');
            $table->string('Neve');
            $table->integer('NXP')->default(10);//szint lépéshez szükséges az az NEEDED XP
            $table->integer('AXP')->default(0);//Aktuális XP
            $table->unsignedBigInteger('Tulaj');
            $table->foreign('Tulaj')->references('userID')->on('felhasznalos');
            $table->string('Faj');
            $table->foreign('Faj')->references('Fajnév')->on('karakterfajs');
            $table->string('Tipus');
            $table->foreign('Tipus')->references('Tipusnév')->on('karaktertipusoks');
            $table->integer('STR')->default(0);
            $table->integer('AGI')->default(0);
            $table->integer('INT')->default(0);
            $table->integer('LUCK')->default(rand(0, 10));
       
        });

        DB::table('karakters')->insert([
            [
                
                'Neve' => 'Karakter 1',
                'Tulaj' => 1,
                'Faj' => 'Orc',
                'Tipus' => 'Harcos',
               
            ],
            [
                
                'Neve' => 'Karakter 2',
                'Tulaj' => 1,
                'Faj' => 'Elf',
                'Tipus' => 'ijász',
                

            ], [
                
                'Neve' => 'Karakter 3',
                'Tulaj' => 2,
                'Faj' => 'Dwarf',
                'Tipus' => 'Harcos',
                
            ]
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('karakters');
    }
};

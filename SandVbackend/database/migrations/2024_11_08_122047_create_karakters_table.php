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
            $table->binary('Kép')->nullable();
            $table->string('Neve');
            $table->integer('NXP')->default(10);//szint lépéshez szükséges az az NEEDED XP
            $table->integer('AXP')->default(0);//Aktuális XP
            $table->unsignedBigInteger('Tulaj');
            $table->foreign('Tulaj')->references('userID')->on('felhasznalos');
            $table->string('Faj');
            $table->foreign('Faj')->references('Fajnév')->on('karakter_fajs');
            $table->string('Tipus');
            $table->foreign('Tipus')->references('Tipusnév')->on('karakter_tipusoks');
            $table->integer('erő');
            $table->integer('ügyeség');
            $table->integer('intelligenci');
            $table->integer('Szerencse');
            $table->timestamps();
        });

        DB::table('karakters')->insert([
            [
                'Kép' => 'karakter1.jpg',
                'Neve' => 'Karakter 1',
                'Tulaj' => 1,
                'Faj' => 'Orc',
                'Tipus' => 'Harcos',
                'erő' => 1,
                'ügyeség' => 1,
                'intelligenci' => 1,
                'Szerencse' => rand(0, 10),
            ],
            [
                'Kép' => 'karakter2.jpg',
                'Neve' => 'Karakter 2',
                'Tulaj' => 1,
                'Faj' => 'Elf',
                'Tipus' => 'ijász',
                'erő' => 1,
                'ügyeség' => 1,
                'intelligenci' => 1,
                'Szerencse' => rand(0, 10),

            ], [
                'Kép' => 'karakter3.jpg',
                'Neve' => 'Karakter 3',
                'Tulaj' => 2,
                'Faj' => 'Dwarf',
                'Tipus' => 'Harcos',
                'erő' => 1,
                'ügyeség' => 1,
                'intelligenci' => 1,
                'Szerencse' => rand(0, 10),
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

<?php

use App\Models\KarakterFaj;
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
        Schema::create('Karakterfaj', function (Blueprint $table) {
            $table->string('Fajnév')->primary();
            $table->binary('icon')->nullable();
            $table->binary('kép')->nullable();
            $table->string('leiras');
            $table->integer('alaperő');
            $table->integer('alapeleterő');
            $table->integer('alaptügyeség');
            $table->integer('alaptinteligenci');
            $table->integer('alapszerencse');
            $table->timestamps();
        });


        DB::table('Karakterfaj')->insert([
            [
                'Fajnév' => 'Dwarf',
                'icon' => 'dwarf_icon.jpg',
                'kép' => 'dwarf.jpg',
                'leiras' => 'A törpök erősek és kitartóak.',
                'alaperő' => 8,
                'alaptügyeség' => 6,
                'alaptinteligenci' => 4,
                'alapszerencse' => 2,
                'alapeleterő' => 150,


            ],
            [
                'Fajnév' => 'Elf',
                'icon' => 'elf_icon.jpg',
                'kép' => 'elf.jpg',
                'leiras' => 'Az elfek gyors és okos faj.',
                'alaperő' => 4,
                'alaptügyeség' => 8,
                'alaptinteligenci' => 10,
                'alapszerencse' => 7,
                'alapeleterő' => 120,
            ], [
                'Fajnév' => 'Orc',
                'icon' => 'orc_icon.jpg',
                'kép' => 'orc.jpg',
                'leiras' => 'Az orkok egy hatalmas és erős faj.',
                'alaperő' => 10,
                'alaptügyeség' => 5,
                'alaptinteligenci' => 3,
                'alapszerencse' => 1,
                'alapeleterő' => 200,
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
        Schema::dropIfExists('karakter_fajs');
    }
};

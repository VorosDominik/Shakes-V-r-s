<?php

use App\Models\KarakterTipusok;
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
        Schema::create('KarakterTipus', function (Blueprint $table) {
            $table->string('Tipusnév')->primary();
            $table->string('TamadasKeplet');
            $table->string('Főstat');
            $table->string('FelszerelésTipus');
            $table->binary('icon')->nullable();
            $table->binary('kép')->nullable();
            $table->integer('Tréningelterő');
            $table->integer('Tréningeltügyeség');
            $table->integer('Tréningeltinteligenci');
            $table->string('leiras');
            $table->timestamps();
        });
        DB::table('KarakterTipus')->insert([
            [ 'Tipusnév' => 'Harcos',
            'TamadasKeplet' => 'erő * 2',
            'Főstat' => 'erő',
            'FelszerelésTipus' => 'Kard és Páncél',
            'icon' => 'harcos_icon.jpg',
            'kép' => 'harcos.jpg',
            'Tréningelterő' => 10,
            'Tréningeltügyeség' => 5,
            'Tréningeltinteligenci' => 2,
            'leiras' => 'A harcosok erősek és képzettek a páncélzatban.'
            

        ],
        [
            'Tipusnév' => 'Varázsló',
            'TamadasKeplet' => 'intelligenci * 3',
            'Főstat' => 'intelligenci',
            'FelszerelésTipus' => 'Pálcika és Köpeny',
            'icon' => 'varazslo_icon.jpg',
            'kép' => 'varazslo.jpg',
            'Tréningelterő' => 2,
            'Tréningeltügyeség' => 3,
            'Tréningeltinteligenci' => 10,
            'leiras' => 'A varázslók erősek a varázslatban, de gyengék a testi harcban.'
        ]
        ,[
            'Tipusnév' => 'ijász',
            'TamadasKeplet' => 'ügyeség * 4',
            'Főstat' => 'intelligenci',
            'FelszerelésTipus' => 'Ij és nyilak',
            'icon' => 'varazslo_icon.jpg',
            'kép' => 'varazslo.jpg',
            'Tréningelterő' => 2,
            'Tréningeltügyeség' => 3,
            'Tréningeltinteligenci' => 10,
            'leiras' => 'AZ ijász ha talál fáj amugy nem vész :D.'
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
        Schema::dropIfExists('karakter_tipusoks');
    }
};

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
        Schema::create('felhasznalos', function (Blueprint $table) {
            $table->id('userID');;
            $table->string('felhasználónév'); 
            $table->string('jelszó'); 
            $table->string('email')->unique();
            $table->integer('karakterek_szama')->default(0); 
            $table->decimal('gold', 8, 2)->default(0.50);
            $table->timestamps(); 
        }); 
    
        // Beillesztünk néhány alapértelmezett felhasználót.
        DB::table('felhasznalos')->insert([
            ['felhasználónév' => 'teszt1', 'jelszó' => 'jelszo1', 'email' => 'teszt1@example.com'],
            ['felhasználónév' => 'teszt2', 'jelszó' => 'jelszo2', 'email' => 'teszt2@example.com'],
            ['felhasználónév' => 'teszt3', 'jelszó' => 'jelszo3', 'email' => 'teszt3@example.com'],
        ]);
    
        // Itt kezdődik a tranzakció.

  
        
      
       
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('felhasznalos');
    }
};

<?php

use App\Http\Controllers\FelhasznaloController;
use App\Http\Controllers\KarakterController;
use App\Http\Controllers\karakterfajController;
use App\Http\Controllers\karaktertipusController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



// Útvonal a KarakterTipus létrehozásához
//Route::get('/karaktertipus/json', [karaktertipusController::class, 'storeKarakterTipus']);

Route::get('/felhasznalo/osszes', [FelhasznaloController::class, 'osszes']);

// Útvonal a Karakter létrehozásához
Route::get('/karakter/osszes', [KarakterController::class, 'osszes']);

// Útvonal a KarakterFaj létrehozásához
Route::get('/karakterfaj/osszes', [karakterfajController::class, 'osszes']);

// Útvonal a KarakterTipus létrehozásához
Route::get('/karaktertipus/osszes', [karaktertipusController::class, 'osszes']);
<?php

use App\Http\Controllers\FelhasznaloController;
use App\Http\Controllers\KarakterController;
use App\Http\Controllers\karakterfajController;
use App\Http\Controllers\karaktertipusController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/felhasznalo/osszes', [FelhasznaloController::class, 'osszes']);

// Útvonal a Karakter létrehozásához
Route::get('/karakter/osszes', [KarakterController::class, 'osszes']);


Route::post('/karakter/hozzaAD', [KarakterController::class, 'hozzaad']);
Route::delete('/Karakter/DELETE/{KID}', [KarakterController::class, 'destroy']);

Route::get('/karakter/{KID}', [KarakterController::class, 'ezAkarakter']);

Route::put('/karakter/{KID}', [KarakterController::class, 'update']);

// Útvonal a KarakterFaj létrehozásához
Route::get('/karakterfaj/osszes', [karakterfajController::class, 'osszes']);

// Útvonal a KarakterTipus létrehozásához
Route::get('/karaktertipus/osszes', [karaktertipusController::class, 'osszes']);



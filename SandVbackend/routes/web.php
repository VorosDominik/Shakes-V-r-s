<?php

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

// Útvonal a Felhasználó létrehozásához
Route::post('/felhasznalo/json', [FelhasznaloController::class, 'storeFelhasznalo'])->name('felhasznalo.json');

// Útvonal a Karakter létrehozásához
Route::post('/karakter/json', [KarakterController::class, 'storeKarakter'])->name('karakter.json');

// Útvonal a KarakterFaj létrehozásához
Route::post('/karakterfaj/json', [KarakterFajController::class, 'storeKarakterFaj'])->name('karakterfaj.json');

// Útvonal a KarakterTipus létrehozásához
Route::post('/karaktertipus/json', [KarakterTipusController::class, 'storeKarakterTipus'])->name('karaktertipus.json');
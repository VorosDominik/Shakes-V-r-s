<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;



use App\Models\Karakter;
use Illuminate\Support\Facades\Validator;

class KarakterController extends Controller
{
    public function storeKarakter(Request $request)
    {
        // Az adatok validálása
        $megfelel = Validator::make($request->all(), [
            'nev' => 'required|max:255',
            'faj' => 'required',
            'tipus' => 'required',
            'ero' => 'required|numeric',
            'ugyesseg' => 'required|numeric',
            'intelligencia' => 'required|numeric',
            'szerencse' => 'required|numeric',
            'felhasznalo_id' => 'required|exists:felhasznalok,id',
        ]);
    
        // Ellenőrizzük, hogy vannak-e validációs hibák
        if ($megfelel->fails()) {
            return response()->json($megfelel->errors(), 422);
        }
    
        // Ha a validáció sikeres, hozzuk létre a karaktert
        $karakter = new Karakter($megfelel->validated());
    
        // Karakter mentése
        $karakter->save();
    
        // Visszaadni az összes karaktert JSON formátumban
        return response()->json(Karakter::all());
    }
}

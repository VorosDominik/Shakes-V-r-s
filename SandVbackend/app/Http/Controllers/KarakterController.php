<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;



use App\Models\Karakter;
use Illuminate\Support\Facades\Validator;

class KarakterController extends Controller

{
    public function osszes()
    {
        $karakterek = Karakter::all();
        return response()->json($karakterek);;
    }
    public function hozzaad(Request $request)
    {
        // Validáld a kérésből származó adatokat a szükséges szabályok alapján.
        $validatedData = $request->validate([
            'Neve' => 'required|string|max:255',
            'Faj' => 'required|string|max:255',
            'Tipus' => 'required|string|max:255',
            'Tulaj' => 'required|exists:felhasznalos,userID', // Ellenőrzi, hogy a felhasználó létezik-e.
            'STR' => 'integer',
            'AGI' => 'integer',
            'INT' => 'integer',
            // Egyéb validációs szabályok...
        ]);

        // Készítsd elő az új karakter létrehozásához szükséges adatokat.
        $data = [
            'Neve' => $validatedData['Neve'],
            'Faj' => $validatedData['Faj'],
            'Tipus' => $validatedData['Tipus'],
            'Tulaj' => $validatedData['Tulaj'],
            'STR' => $validatedData['STR'] ?? 0,
            'AGI' => $validatedData['AGI'] ?? 0,
            'INT' => $validatedData['INT'] ?? 0,
            'LUCK' => rand(0, 10), // Alapértelmezett szerencse érték generálása.
        ];

        // Hozz létre egy új karakter rekordot az adatbázisban.
        $karakter = Karakter::create($data);

        // Visszaadjuk az új karaktert a válaszban.
        return response()->json(['message' => 'Karakter létrehozva', 'karakter' => $karakter], 201);
    }

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

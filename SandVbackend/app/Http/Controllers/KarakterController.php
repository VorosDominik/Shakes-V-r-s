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

    public function update(Request $request, $KID)
{
    $karakter = Karakter::find($KID);

    if (!$karakter) {
        return response()->json(['message' => 'Karakter nem található!'], 404);
    }

    $validatedData = $request->validate([
        'Neve' => 'required|string|max:255',
        'Faj' => 'required|string|max:255',
        'Tipus' => 'required|string|max:255',
        'Tulaj' => 'required|exists:felhasznalos,userID', // Feltételezve, hogy van 'felhasznalos' tábla és 'userID' oszlop
        'STR' => 'sometimes|integer',
        'AGI' => 'sometimes|integer',
        'INT' => 'sometimes|integer',
        // Egyéb validációs szabályok...
    ]);

    // Módosítjuk a meglévő karakter adatait.
    $karakter->update($validatedData);

    return response()->json(['message' => 'Karakter frissítve', 'karakter' => $karakter]);
}

public function ezAkarakter($KID)
{
    $karakter = Karakter::find($KID);

    if ($karakter) {
        return response()->json($karakter);
    } else {
        return response()->json(['message' => 'Karakter nem található!'], 404);
    }
}
    public function destroy($KID) {
        $karakter = Karakter::where('KID', $KID)->first();
    
        if ($karakter) {
            $karakter->delete();
            return response()->json(['message' => 'Sikeres törlés!'], 200);
        } else {
            return response()->json(['message' => 'Karakter nem található!'], 404);
        }
    }
    
}

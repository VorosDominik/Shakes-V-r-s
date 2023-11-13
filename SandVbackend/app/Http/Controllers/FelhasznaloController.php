<?php

namespace App\Http\Controllers;

use App\Models\Felhasznalo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FelhasznaloController extends Controller
{
    public function osszes()
    {
        $FH = Felhasznalo::all();
        return response()->json($FH);;

    }
    public function storeFelhasznalo(Request $request)
{
    // Az adatok validálása
    $megfelel = Validator::make($request->all(), [
        'felhasználónév' => 'required|max:255|unique:felhasznalok,felhasználónév',
        'jelszó' => 'required|min:6', // feltételezve, hogy van minimális hossz
        'email' => 'required|email|unique:felhasznalok,email',
        // További szabályok, ha szükséges...
    ]);

    // Ellenőrizzük, hogy vannak-e validációs hibák
    if ($megfelel->fails()) {
        return response()->json($megfelel->errors(), 422);
    }

    // Ha a validáció sikeres, hozzuk létre a felhasználót
    $felhasznalo = new Felhasznalo($megfelel->validated());

    // Jelszó hashelése előtt be kell állítani
    $felhasznalo->jelszó = bcrypt($request->jelszó);

    // Felhasználó mentése
    $felhasznalo->save();

    // Visszaadni az újonnan létrehozott felhasználót JSON formátumban
    return response()->json($felhasznalo);
}
}

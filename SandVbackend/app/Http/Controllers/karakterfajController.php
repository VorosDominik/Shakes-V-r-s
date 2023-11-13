<?php

namespace App\Http\Controllers;

use App\Models\KarakterFaj;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class karakterfajController extends Controller
{

    public function osszes()
    {
        $fajok = KarakterFaj::all();
        return response()->json($fajok);;

    }
    public function storeKarakterFaj(Request $request)
{
   
    $validator = Validator::make($request->all(), [
        'Fajnév' => 'required|max:255|unique:karakterfaj,Fajnév',
        'icon' => 'nullable',
        'kép' => 'nullable',
        'leiras' => 'required',
        'alaperő' => 'required|numeric',
        'alapeleterő' => 'required|numeric',
        'alaptügyeség' => 'required|numeric',
        'alaptinteligenci' => 'required|numeric',
        'alapszerencse' => 'required|numeric',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 400);
    }

    $karakterFaj = KarakterFaj::create($validator->validated());

    return response()->json($karakterFaj);
}
}

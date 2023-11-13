<?php

namespace App\Http\Controllers;

use App\Models\KarakterTipusok;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class karaktertipusController extends Controller
{
    public function osszes()
    {
        $Ktip = KarakterTipusok::all();
        return response()->json($Ktip);;

    }
    public function storeKarakterTipus(Request $request)
{
    $validator = Validator::make($request->all(), [
        'Tipusnév' => 'required|max:255|unique:karaktertipus,Tipusnév',
        'TamadasKeplet' => 'required',
        'Főstat' => 'required',
        'FelszerelésTipus' => 'required',
        'icon' => 'nullable',
        'kép' => 'nullable',
        'Tréningelterő' => 'required|numeric',
        'Tréningeltügyeség' => 'required|numeric',
        'Tréningeltinteligenci' => 'required|numeric',
        'leiras' => 'required',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 400);
    }

    $karakterTipus = KarakterTipusok::create($validator->validated());

    return response()->json($karakterTipus);
}
}

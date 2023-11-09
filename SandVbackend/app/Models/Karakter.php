<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Karakter extends Model
{
    use HasFactory;
    protected static function booted()
    {
        static::created(function ($karakter) {
            $felhasznalo = Felhasznalo::find($karakter->felhasznalo_id);
            $felhasznalo->increment('karakterek_szama');
            $felhasznalo->save();
        });
        
    }
}

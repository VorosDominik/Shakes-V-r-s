<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Karakter extends Model
{
    use HasFactory;

    protected $fillable = [
        'Neve', 'Faj', 'Tulaj','Tipus', 'NXP',
        'AXP', 'STR', 'AGI', 'INT', 'LUCK'
    ];

    protected static function booted()
    {
        static::created(function ($karakter) {
            $felhasznalo = Felhasznalo::find($karakter->felhasznalo_id);
            $felhasznalo->increment('karakterek_szama');
            $felhasznalo->save();
        });
    }
}

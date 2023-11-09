<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KarakterFaj extends Model
{
    use HasFactory;

    protected $fillable = [
        'Fajnév',
        'icon',
        'kép' ,
        'leiras',
        'alaperő',
        'alaptügyeség' ,
        'alaptinteligenci',
        'alapszerencse',
        'alapeleterő' ,
    ];
}

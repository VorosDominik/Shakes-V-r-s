<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Felhasznalo extends Model
{
    use HasFactory;
    protected $primaryKey = 'userID';
    protected $fillable = [
        'felhasználónév',
        'jelszó',
        'karakterek_száma',
    ];
    public function karakterek()
    {
        return $this->hasMany(Karakter::class, 'felhasznalo_id');
    }
   
}

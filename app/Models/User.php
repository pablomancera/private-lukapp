<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function fixed_expenses() {
        return $this->hasMany(FixedExpenses::class);
    }

    public function variable_expenses() {
        return $this->hasMany(VariableExpenses::class);
    }

    public function fixed_incomes() {
        return $this->hasMany(FixedIncomes::class);
    }

    public function variable_incomes() {
        return $this->hasMany(VariableIncomes::class);
    }
    
    public function settings() {
        return $this->hasOne(Settings::class);
    }
}

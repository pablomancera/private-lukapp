<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\VariableIncomes;
use Illuminate\Database\Seeder;

class VariableIncomesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::find(1);

        VariableIncomes::factory()->count(1000)->for($user)->create();
    }
}

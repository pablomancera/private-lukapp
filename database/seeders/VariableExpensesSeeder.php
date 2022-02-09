<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\VariableExpenses;
use Illuminate\Database\Seeder;

class VariableExpensesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::find(1);

        VariableExpenses::factory()->count(1000)->for($user)->create();
    }
}

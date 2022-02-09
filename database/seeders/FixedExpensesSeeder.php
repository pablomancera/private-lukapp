<?php

namespace Database\Seeders;

use App\Models\FixedExpenses;
use App\Models\User;
use Illuminate\Database\Seeder;

class FixedExpensesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::find(1);

        FixedExpenses::factory()->count(50)->for($user)->create();
    }
}

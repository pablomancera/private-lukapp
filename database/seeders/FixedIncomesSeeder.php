<?php

namespace Database\Seeders;

use App\Models\FixedIncomes;
use App\Models\User;
use Illuminate\Database\Seeder;

class FixedIncomesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::find(1);

        FixedIncomes::factory()->count(10)->for($user)->create();
    }
}

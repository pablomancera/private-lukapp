<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class FixedExpensesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word(),
            'value' => $this->faker->randomNumber(7, false),
            'day' => $this->faker->numberBetween(1, 31)
        ];
    }
}

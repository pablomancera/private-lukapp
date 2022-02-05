<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class VariableExpensesFactory extends Factory
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
            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now')
        ];
    }
}

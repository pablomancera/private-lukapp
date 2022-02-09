<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class FixedIncomesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->sentence(3),
            'value' => $this->faker->randomNumber(7, false),
            'day' => $this->faker->numberBetween(1, 31)
        ];
    }
}

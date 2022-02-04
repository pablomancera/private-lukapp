<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Ingresos Variables
        </h2>
    </x-slot>
    <x-money-table route="/incomes/variable" type="variable" color="text-green-500">ingreso</x-money-table>
</x-app-layout>
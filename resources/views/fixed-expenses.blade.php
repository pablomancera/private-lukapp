<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Gastos fijos
        </h2>
    </x-slot>
    <x-money-table route="/fixed-expenses" type="fixed" color="text-red-500">Nombre del gasto</x-money-table>
</x-app-layout>
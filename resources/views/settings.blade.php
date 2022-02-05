<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Configuración
        </h2>
    </x-slot>


    <div class="flex flex-col justify-center my-10">
        <form action="/app-settings" method="post">
            @csrf
            <div class="w-5/6 mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <div class="p-6">
                    <label for="savingGoal" class="form-label">Ahorro mensual</label>
                    <input type="number" class="form-control" id="savingGoal" name="goal" value="{{ Auth::user()->settings->goal }}">
                </div>
                <div class="p-3 border-t-2 overflow-hidden">
                    <input type="submit" class="btn btn-success float-right" value="Guardar"></input>
                </div>
            </div>
        </form>
    </div>
</x-app-layout>
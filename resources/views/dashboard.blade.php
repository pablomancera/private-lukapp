<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>
    <script src="/js/components/dashboard.js"></script>
    <script>
        const user = "{{ Auth::user()->name }}";
        const goal = "{{ Auth::user()->settings->goal }}";
    </script>

    <div class="flex flex-col justify-center my-10">
        <div class="w-5/6 mx-auto bg-white shadow-lg rounded-sm border border-gray-200 p-6">
            <h2 id="dashboard-greeting"></h2>
            <hr>
            <h4 class="my-4">¿Cómo vamos este mes?</h4>
            <div class="my-8">
                <div class="progress inline mx-6">
                    <div id="balance-progress" class="w-0 progress-bar progress-bar-striped progress-bar-animated bg-success transition-transform" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="0"></div>
                </div>
                <h6 class="float-left">0$</h6>
                <h6 id="dashboard-balance" class="float-right"></h6>
                <p id="dashboard-remaining-p" class="opacity-0 transition-opacity delay-500 my-6">¡Estás a <span id="dashboard-remaining" class=""></span> de completar tu meta mensual!</p>
            </div>
        </div>
    </div>
</x-app-layout>
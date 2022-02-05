<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>
    <script src="/js/components/dashboard.js"></script>
    <script>
        const user = "{{ Auth::user()->name }}"
    </script>

    <div class="flex flex-col justify-center my-10">
        <div class="w-5/6 mx-auto bg-white shadow-lg rounded-sm border border-gray-200 p-6">
            <h3 id="greeting"></h3>
            <hr>
            <h3 class="my-6">¿Cómo vamos este mes?</h3>
            <div>
                <h6 class="float-left">0$</h6>
                <div class="progress inline mx-4">
                    <div id="balanceProgress" class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6 id="dashboard-balance"></h6>
            </div>
        </div>
    </div>
</x-app-layout>
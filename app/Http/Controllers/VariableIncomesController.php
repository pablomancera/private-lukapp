<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVariableIncomesRequest;
use App\Http\Requests\UpdateVariableIncomesRequest;
use App\Models\VariableIncomes;
use Illuminate\Support\Facades\Auth;

class VariableIncomesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();

        return $user->variable_incomes->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreVariableIncomesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreVariableIncomesRequest $request)
    {
        $validated = $request->validated();

        $data = new VariableIncomes;

        $data->name = $validated['name'];
        $data->value = $validated['value'];
        $data->user_id = Auth::id();

        $data->save();

        return view("variable-incomes");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\VariableIncomes  $variableIncomes
     * @return \Illuminate\Http\Response
     */
    public function show(VariableIncomes $variableIncomes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\VariableIncomes  $variableIncomes
     * @return \Illuminate\Http\Response
     */
    public function edit(VariableIncomes $variableIncomes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateVariableIncomesRequest  $request
     * @param  \App\Models\VariableIncomes  $variableIncomes
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateVariableIncomesRequest $request, VariableIncomes $variableIncomes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\VariableIncomes  $variableIncomes
     * @return \Illuminate\Http\Response
     */
    public function destroy(VariableIncomes $variableIncomes)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVariableExpensesRequest;
use App\Http\Requests\UpdateVariableExpensesRequest;
use App\Models\VariableExpenses;
use Illuminate\Support\Facades\Auth;

class VariableExpensesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $user = Auth::user();

        return $user->variable_expenses->toJson();
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
     * @param  \App\Http\Requests\StoreVariableExpensesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreVariableExpensesRequest $request)
    {
        $validated = $request->validated();

        $data = new VariableExpenses;

        $data->name = $validated['name'];
        $data->value = $validated['value'];
        $data->user_id = Auth::id();

        $data->save();

        return view("variable-expenses");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\VariableExpenses  $variableExpenses
     * @return \Illuminate\Http\Response
     */
    public function show(VariableExpenses $variableExpenses)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\VariableExpenses  $variableExpenses
     * @return \Illuminate\Http\Response
     */
    public function edit(VariableExpenses $variableExpenses)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateVariableExpensesRequest  $request
     * @param  \App\Models\VariableExpenses  $variableExpenses
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateVariableExpensesRequest $request, VariableExpenses $variableExpenses)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\VariableExpenses  $variableExpenses
     * @return \Illuminate\Http\Response
     */
    public function destroy(VariableExpenses $variableExpenses)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVariableIncomesRequest;
use App\Http\Requests\UpdateVariableIncomesRequest;
use App\Models\User;
use App\Models\VariableIncomes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VariableIncomesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = Auth::user();

        if ($request->date) {
            $date = strtotime($request->date);
            return VariableIncomes::where('user_id', $user->id)
                                        ->whereMonth('created_at', date('m', $date))
                                        ->whereYear('created_at', date('Y', $date))
                                        ->get();
        }

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
    public function show($id)
    {
        $user = User::find(Auth::id());

        return $user->variable_incomes->where('id', $id)->first();
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
    public function update(Request $request, $id)
    {
        $data = VariableIncomes::find($id);

        if (isset($request->name)) {
            $data->name = $request->name;
        }
        if (isset($data->value)) {
            $data->value = $request->value;
        }

        $data->save();

        return view("variable-incomes");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\VariableIncomes  $variableIncomes
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = VariableIncomes::find($id); 
        
        $data->delete();

        return view("variable-incomes");
    }
}

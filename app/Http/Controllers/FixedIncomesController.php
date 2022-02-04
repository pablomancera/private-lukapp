<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFixedIncomesRequest;
use App\Http\Requests\UpdateFixedIncomesRequest;
use App\Models\FixedIncomes;
use Illuminate\Support\Facades\Auth;

class FixedIncomesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();

        return $user->fixed_incomes->toJson();
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
     * @param  \App\Http\Requests\StoreFixedIncomesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreFixedIncomesRequest $request)
    {
        $validated = $request->validated();

        $data = new FixedIncomes;

        $data->name = $validated['name'];
        $data->value = $validated['value'];
        $data->day = $validated['day'];
        $data->user_id = Auth::id();

        $data->save();

        return view("fixed-incomes");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FixedIncomes  $fixedIncomes
     * @return \Illuminate\Http\Response
     */
    public function show(FixedIncomes $fixedIncomes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FixedIncomes  $fixedIncomes
     * @return \Illuminate\Http\Response
     */
    public function edit(FixedIncomes $fixedIncomes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateFixedIncomesRequest  $request
     * @param  \App\Models\FixedIncomes  $fixedIncomes
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateFixedIncomesRequest $request, FixedIncomes $fixedIncomes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FixedIncomes  $fixedIncomes
     * @return \Illuminate\Http\Response
     */
    public function destroy(FixedIncomes $fixedIncomes)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFixedExpensesRequest;
use App\Models\FixedExpenses;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FixedExpensesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();

        return $user->fixed_expenses->toJson();
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreFixedExpensesRequest $request)
    {
        $validated = $request->validated();

        $data = new FixedExpenses;

        $data->name = $validated['name'];
        $data->value = $validated['value'];
        $data->day = $validated['day'];
        $data->user_id = Auth::id();

        $data->save();

        return view("fixed-expenses");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find(Auth::id());

        return $user->fixed_expenses->where('id', $id)->first();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = FixedExpenses::find($id);

        if (isset($request->name)) {
            $data->name = $request->name;
        }
        if (isset($data->value)) {
            $data->value = $request->value;
        }
        if (isset($data->day)) {
            $data->day = $request->day;
        }

        $data->save();

        return view("fixed-expenses");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = FixedExpenses::find($id); 
        
        $data->delete();

        return view("fixed-expenses");
    }
}

<?php

use App\Http\Controllers\FixedExpensesController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::get('/ingresos', function () {
    return view('ingresos');
})->middleware(['auth'])->name('ingresos');


Route::get('/fixed', function () {
    return view('fixed-expenses');
})->middleware(['auth'])->name('fixed');

Route::get('/variable', function () {
    return view('variable-expenses');
})->middleware(['auth'])->name('variable');

Route::get('/savings', function () {
    return view('savings');
})->middleware(['auth'])->name('savings');

Route::get('/settings', function () {
    return view('settings');
})->middleware(['auth'])->name('settings');

Route::resource('fixed-expenses', FixedExpensesController::class);

require __DIR__.'/auth.php';

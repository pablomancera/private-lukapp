<?php

use App\Http\Controllers\FixedExpensesController;
use App\Http\Controllers\FixedIncomesController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\VariableExpensesController;
use App\Http\Controllers\VariableIncomesController;
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

Route::get('/fixed-incomes', function () {
    return view('fixed-incomes');
})->middleware(['auth'])->name('fixed-incomes');

Route::get('/variable-incomes', function () {
    return view('variable-incomes');
})->middleware(['auth'])->name('variable-incomes');

Route::get('/fixed-expenses', function () {
    return view('fixed-expenses');
})->middleware(['auth'])->name('fixed-expenses');

Route::get('/variable-expenses', function () {
    return view('variable-expenses');
})->middleware(['auth'])->name('variable-expenses');

Route::get('/savings', function () {
    return view('savings');
})->middleware(['auth'])->name('savings');

Route::get('/settings', function () {
    return view('settings');
})->middleware(['auth'])->name('settings');

Route::prefix('expenses')->group(function () {
    Route::resource('/fixed', FixedExpensesController::class);
    Route::resource('/variable', VariableExpensesController::class);
});

Route::prefix('incomes')->group(function () {
    Route::resource('/fixed', FixedIncomesController::class);
    Route::resource('/variable', VariableIncomesController::class);
});

Route::resource('app-settings', SettingsController::class);

require __DIR__ . '/auth.php';

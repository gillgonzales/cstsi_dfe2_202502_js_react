<?php

use App\Http\Controllers\LoginWebController;
use Illuminate\Support\Facades\Route;

Route::controller(LoginWebController::class)->group(function(){
    Route::post('/login','login');
    Route::post('/logout','logout')->middleware("auth:sanctum");
});

Route::any('/{any?}', function(){
    return view('index');
})->where('any', '^((?!api).)*$');


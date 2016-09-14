<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');



    /* API Urls */
    Route::group(['prefix' => 'v1'], function () {
        Route::get('todos', function () {
            return App\Todo::all();
        });
        Route::post('todo', '\App\Http\Controllers\Api\TodoApiController@saveTodo');
        Route::post('todo-delete', '\App\Http\Controllers\Api\TodoApiController@deleteTodo');
        Route::post('todo-status', '\App\Http\Controllers\Api\TodoApiController@changeTodoStatus');
    });
<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/
use Illuminate\Http\Response as HttpResponse;
Route::get('/', function () {
    return view('index');
});
Route::group(['prefix' => 'api'], function()
{
    //Route::resource('authenticate', 'AuthenticateController', ['only' => ['index']]);
    Route::post('authenticate', 'AuthenticateController@authenticate');
    Route::get('authenticate/user', 'AuthenticateController@getAuthenticatedUser');
});
Route::group(['before' => 'jwt-auth'], function()
{
	/*$token = JWTAuth::getToken();
    $user = JWTAuth::toUser($token);*/
     try {
           JWTAuth::parseToken()->toUser();
    } catch (Exception $e) {
           return response()->json(['error' => $e->getMessage()], HttpResponse::HTTP_UNAUTHORIZED);
    }
	  Route::get('comments', 'CommentController@index');
	Route::post('comments', 'CommentController@store');
	Route::delete('comments/{id}', 'CommentController@destroy');  


    Route::get('links', 'LinkController@getLinksWithCategories');
});




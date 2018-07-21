<?php

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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/',[     
        'uses' => 'PostController@create', 
        'as' => 'post.create',
    ]);
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
//display post upload form
Route::get('/create', 'PostController@create')->name('post.create');
//store post
Route::post('post', 'PostController@store')->name('post.store');

<?php
use App\Events\MessageSent;
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

Route::get('/chat', function(){
	return view('chat');
})->middleware('auth');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/messages', function()
{
	return App\Message::with('user')->get();
})->middleware('auth');

Route::post('/messages', function()
{
	$user=Auth::user();
	
	$message=$user->messages()->create([
		'message'=>request()->get('message')]);
	
	broadcast(new MessageSent($user, $message))->toOthers();

	return ['status'=>'succes'];
})->middleware('auth');
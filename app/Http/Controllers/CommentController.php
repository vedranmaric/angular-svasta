<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Comment;
use Illuminate\Support\Facades\Input;
class CommentController extends Controller
{
    
    public function index()
    {
    	return response()->json(Comment::get());
    }

    public function destroy($id)
    {
    	Comment::destroy($id);
    	return response()->json(array('success' => true));
    }

    public function store()
    {
    	Comment::create(array(
    		'text' => Input::get("text"),
    		'author' => Input::get("author")
    	));
    	return response()->json(array(
    		'success'=>true
    	));
    }
}

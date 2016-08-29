<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Link;
use App\LinkCategory;
class LinkController extends Controller
{
    public function getLinksWithCategories()
    {
    	return response()->json(array("links"=>Link::get(),"categories"=>LinkCategory::get()));
    }}

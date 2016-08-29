<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LinkCategory extends Model
{
	protected $table = "link_categories";
    protected $fillable = ['name'];
    
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */


    /**
     * Get the user that owns the task.
     */
    public function links()
    {
        return $this->hasMany(Link::class);
    }
}

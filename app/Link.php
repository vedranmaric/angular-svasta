<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Link extends Model
{
	protected $table = "links";
    protected $fillable = ['title', 'url','cat_id'];
    
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'cat_id' => 'int',
    ];

    /**
     * Get the user that owns the task.
     */
    public function category()
    {
        return $this->belongsTo(LinkCategory::class);
    }
}

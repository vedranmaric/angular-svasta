<?php

use Illuminate\Database\Seeder;
use App\Link;
class LinkTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('links')->delete();
         $links = array(
                ['title' => 'accusantium', 'url'=>"https://www.example.com",'cat_id'=>4], 
                ['title' => 'doloremque', 'url'=>"https://www.example.com",'cat_id'=>1],
                ['title' => 'laudantium', 'url'=>"https://www.example.com",'cat_id'=>3],
                ['title' => 'totam rem', 'url'=>"https://www.example.com",'cat_id'=>1],
                ['title' => 'aperiam', 'url'=>"https://www.example.com",'cat_id'=>4],
                ['title' => 'eaque', 'url'=>"https://www.example.com",'cat_id'=>3],
                ['title' => 'quae ab illo', 'url'=>"https://www.example.com",'cat_id'=>2],
                ['title' => 'inventore', 'url'=>"https://www.example.com",'cat_id'=>2],
        );

        foreach ($links as $link)
        {
            Link::create($link);
        }
    }
}


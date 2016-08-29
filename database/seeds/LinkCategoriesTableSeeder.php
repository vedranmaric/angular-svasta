<?php

use Illuminate\Database\Seeder;
use App\LinkCategory;
class LinkCategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('link_categories')->delete();
         $link_cats = array(
                ['name' => 'First Category'], 
                ['name' => 'Second Category'], 
                ['name' => 'Third Category'], 
                ['name' => 'Fourth Category'], 
        );

        foreach ($link_cats as $link_cat)
        {
            LinkCategory::create($link_cat);
        }

    }
}

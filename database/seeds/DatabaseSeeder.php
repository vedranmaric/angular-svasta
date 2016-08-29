<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	Eloquent::unguard();
        $this->call(CommentsTableSeeder::class);
        $this->call(UsersTableSeeder::class);
         $this->call(LinkCategoriesTableSeeder::class);
        $this->call(LinkTableSeeder::class);
    }
}

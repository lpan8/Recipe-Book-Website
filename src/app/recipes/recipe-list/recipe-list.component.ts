import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test recipe.', 'https://www.dinneratthezoo.com/wp-content/uploads/2017/10/firecracker-chicken-1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

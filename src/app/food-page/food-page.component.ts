import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Food } from '../shared/models/food';
import { TagsComponent } from '../tags/tags.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart/cart.service';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [TagsComponent, CommonModule, RouterModule, NotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css',
})
export class FoodPageComponent implements OnInit {
  food!: Food;

  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = foodService.getFoodById(params['id']);
      }
    });
  }

  ngOnInit(): void {}

  addToCart(food: Food): void {
    this.cartService.addToCart(food);
    this.router.navigateByUrl('/cart');
  }
}

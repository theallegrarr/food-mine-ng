import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css',
})
export class TagsComponent implements OnInit {
  tags?: Tag[] = [];
  @Input() foodPageTags?: string[];
  @Input() justifyContent?: string;

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    if (!this.foodPageTags) this.tags = this.foodService.getAllTags();
  }
}

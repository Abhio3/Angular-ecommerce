import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule,  CarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  images = [
    'images/slide1.jpg',
    'images/slide2.jpg',
    'images/slide3.jpg'
  ];
}

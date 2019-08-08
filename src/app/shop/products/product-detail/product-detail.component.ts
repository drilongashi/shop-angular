import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

  product = {
    title: 'Mortal combat',
    stock: 'In Stock',
    price: '$65.25',
    description: 'The all new Custom Character Variations give you unprecedented control to customize the fighters and make them your own The new graphics engine showcasing every skull-shattering, eye-popping moment, brings you so close to the fight you can feel it And featuring a roster of new and returning Klassic Fighters, Mortal Kombat\'s best in class cinematic story mode continues the epic saga over 25 years in the making\n',
    image: '/assets/img/mortal-kombat.jpg',
    platform: 'PS'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
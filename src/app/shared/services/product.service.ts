import { Injectable } from '@angular/core';
import {ProductModel} from '../models/product.model';
import {ProductReviewModel} from '../models/product-review.model';
import {ProductRatingModel} from '../models/product-rating.model';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductModel[] = [];

  constructor(private storageService: StorageService) {
    this.fetchProducts();
  }

  fetchProducts(): void {
    const product1 = new ProductModel();
    product1.id = 1;
    product1.description = 'Lorem ipsum';
    product1.image = '/assets/img/My-Cart/first-version/1.png';
    product1.platform = 'PC';
    product1.price = 20;
    product1.stock = 2;
    product1.title = 'Mortal Combat';

    const product1Rating = new ProductRatingModel();
    product1Rating.rated = 3.5;
    product1Rating.totalReviews = 49;

    const product1Review = new ProductReviewModel();
    product1Review.id = 1;
    product1Review.description = 'Test review description';
    product1Review.stars = 2;
    product1Review.name = 'John Doe';
    product1Rating.reviews = [product1Review];

    product1.rating = product1Rating;

    this.products = [product1];
  }

  getProducts(): ProductModel[] {
    return this.products;
  }

  getProduct(id: number): ProductModel {
    const products = this.products.filter(item => item.id == id);
    if (products) {
      const product = products[0];
      product.isWishlisted = this.getProductInWishlist(product.id);
      return product;
    }

    return null;
  }

  // get wishlist product
  getProductInWishlist(id: number): boolean {
    const wishlist = this.storageService.get('wishlist');
    if (wishlist) {
      return JSON.parse(wishlist).filter(item => item == id).length > 0;
    } else {
      return false;
    }
  }

  // add to wishlist
  addToWishlist(id: number) {
    const wishlist = this.storageService.get('wishlist');
    if (wishlist) {
      const wishlistArray = JSON.parse(wishlist);
      if (wishlistArray.filter(item => item == id).length > 0) {
        return;
      } else {
        wishlistArray.push(id);
        this.storageService.set('wishlist', JSON.stringify(wishlistArray));
      }
    } else {
        this.storageService.set('wishlist', JSON.stringify([id]));
    }
  }

  // delete from wishlist
  deleteFromWishlist(id: number) {
    const wishlist = this.storageService.get('wishlist');
    if (wishlist) {
      const wishlistArray = JSON.parse(wishlist).filter(item => item != id);
      this.storageService.set('wishlist', JSON.stringify(wishlistArray));
    }
  }

  // clear wishlist
  clearWishList() {
    this.storageService.delete('wishlist');
  }
}
import {Injectable} from '@angular/core';
import {ProductModel} from '../models/product.model';
import {StorageService} from './storage.service';
import {BaseStorageService} from './base-storage.service';
import {LocalStorageKey} from '../constants/local-storage-key';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {RestService} from './rest.service';
import {HttpRequestMethod} from '../constants/http-request.method';
import {ENDPOINTS} from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  rootUrl = 'http://localhost:8080/api/v1/products';
  products: ProductModel[] = [];

  constructor(private storageService: StorageService,
              private baseStorage: BaseStorageService,
              private http: HttpClient,
              private router: Router,
              private restService: RestService) {
    this.fetchProducts();
  }

  fetchProducts(): void {

    this.restService.publicRequest<ProductModel[]>(HttpRequestMethod.GET, ENDPOINTS.products.getAll).subscribe(res => {
        this.products = res;
      },
      (error) => {
        console.error(error);
      });

    /*const product1 = new ProductModel();
    product1.id = 1;
    product1.description = 'Lorem ipsum';
    product1.image = '/assets/img/bf4-cover.jpg';
    product1.platform = 'PC';
    product1.price = 20;
    product1.stock = 2;
    product1.title = 'Battlefield 4';
    const product1Rating = new ProductRatingModel();
    product1Rating.rated = 4.5;
    product1Rating.totalReviews = 49;
    const product1Review = new ProductReviewModel();
    product1Review.id = 1;
    product1Review.description = 'Test review description';
    product1Review.stars = 2;
    product1Review.name = 'John Doe';
    product1Rating.reviews = [product1Review];
    product1.rating = product1Rating;
    this.products.push(product1);
    const product2 = new ProductModel();

    product2.id = 2;
    product2.description = 'Lorem ipsum';
    product2.image = '/assets/img/ac4-cover.jpg';
    product2.platform = 'PC';
    product2.price = 20;
    product2.stock = 2;
    product2.title = 'Assassin\'s Creed Black Flag';
    const product2Rating = new ProductRatingModel();
    product2Rating.rated = 4.5;
    product2Rating.totalReviews = 49;
    const product2Review = new ProductReviewModel();
    product2Review.id = 2;
    product2Review.description = 'Test review description';
    product2Review.stars = 2;
    product2Review.name = 'John Doe';
    product2Rating.reviews = [product2Review];
    product2.rating = product2Rating;
    this.products.push(product2);

    const product3 = new ProductModel();
    product3.id = 3;
    product3.description = 'Lorem ipsum';
    product3.image = '/assets/img/rdr2-cover.jpg';
    product3.platform = 'PC';
    product3.price = 20;
    product3.stock = 2;
    product3.title = 'Red Dead Redemption 2';
    const product3Rating = new ProductRatingModel();
    product3Rating.rated = 4.5;
    product3Rating.totalReviews = 49;
    const product3Review = new ProductReviewModel();
    product3Review.id = 3;
    product3Review.description = 'Test review description';
    product3Review.stars = 2;
    product3Review.name = 'John Doe';
    product3Rating.reviews = [product3Review];
    product3.rating = product3Rating;
    this.products.push(product3);

    const product4 = new ProductModel();
    product4.id = 4;
    product4.description = 'Lorem ipsum';
    product4.image = '/assets/img/mk11-cover.jfif';
    product4.platform = 'PC';
    product4.price = 59.99;
    product4.stock = 200;
    product4.title = 'Mortal Kombat 11';
    const product4Rating = new ProductRatingModel();
    product4Rating.rated = 4.5;
    product4Rating.totalReviews = 49;
    const product4Review = new ProductReviewModel();
    product4Review.id = 4;
    product4Review.description = 'Test review description';
    product4Review.stars = 4;
    product4Review.name = 'John Doe';
    product4Rating.reviews = [product4Review];
    product4.rating = product4Rating;
    this.products.push(product4);*/
  }

  getProducts(): ProductModel[] {
    return this.products;
  }


  getProduct(id: number): ProductModel {
    const products = this.products.filter(item => item.id == id);
    if (products) {
      const product = products[0];
      // product.isWishlisted = this.getProductInWishlist(product.id);
      return product;
    }

    return null;
  }

  // clear wishlist
  clearWishList() {
    this.baseStorage.clearStorageOf(LocalStorageKey.WISHLIST);
  }

  getProductsPaged(size: number, page: number, sort?: string) {
    const qParams = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.get(this.rootUrl + '/paged', {headers, params: qParams});
  }

}

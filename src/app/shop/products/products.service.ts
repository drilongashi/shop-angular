import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductModel} from '../../shared/models/product.model';
import {ENDPOINTS} from '../../shared/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly rootUrl = ENDPOINTS.products.getAll + '/';


  resData: any;

  constructor(private http: HttpClient) {
  }

  getAllProducts() {
    return this.http.get(this.rootUrl + 'allActive');

  }

  getProductId(name) {
    return this.http.get(this.rootUrl + 'name/' + name);
  }

  registerProduct(data) {
    return this.http.post<any>(this.rootUrl, data);
  }

  getProductByPlatformAndBrand(params: any) {
    return this.http.get<ProductModel[]>(this.rootUrl + 'filter', {params});
  }

  getMinAndMaxPrices() {
    return this.http.get(this.rootUrl + 'getPrices');
  }

  getProductBySelectedPrice(event: any) {
    return this.http.get(this.rootUrl + 'filter', {params: event});
  }

  getHighestPrice() {
    return this.http.get(this.rootUrl + 'getHighestPrice');
  }


  /*uploadFiles(payload) {
    return this.http
      .post('http://localhost:8080/api/v1/upload/',
        payload
      );
  }*/

  updateProduct(data, id) {
    return this.http.put(this.rootUrl + id, data);
  }


  deleteProduct(id) {
    return this.http.delete(this.rootUrl + id);
  }
}

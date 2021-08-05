import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productHost = 'http://localhost:8030/api';

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productHost}/product`);
  }

  public addProduct(data: any) {
    return this.http.post(`${this.productHost}/product`, data);
  }

  public getDetail(id: string): Observable<any> {
    return this.http.get<any>(`${this.productHost}/product/${id}`).pipe(
      map((result: any) => result.payload)
  );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Product {
  private apiUrl = 'https://fakestoreapi.com/';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl+'products');
  }

   getProductsById(id:any): Observable<any> {
    return this.http.get(this.apiUrl+"products/"+id);
  }
  // 🛒 Get all carts
  getAllCarts(): Observable<any> {
    return this.http.get(this.apiUrl + 'carts');
  }

  // 🛒 Get a single cart
  getCartById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + 'carts/' + id);
  }

  // ➕ Add a new cart
  addCart(cartData: any): Observable<any> {
    return this.http.post(this.apiUrl + 'carts', cartData);
  }

  // ✏️ Update a cart
  updateCart(id: number, cartData: any): Observable<any> {
    return this.http.put(this.apiUrl + 'carts/' + id, cartData);
  }

  // ❌ Delete a cart
  deleteCart(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + 'carts/' + id);
  }
}

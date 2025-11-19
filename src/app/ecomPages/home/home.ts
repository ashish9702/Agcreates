import { Component } from '@angular/core';
import { Product } from '../services/product';
import { CommonModule, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [SlicePipe, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class EcomHomeComponent {
products: any[] = [];
carts: any[] = [];
  loading = true;

  constructor(private productService: Product) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data: any[]) => {
        this.products = data.slice(0, 8); // show first 8 as featured
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
Detail:any;
  addtocart(id:any){
      this.productService.getProductsById(id).subscribe({
      next: (data: any) => {
        this.Detail = data?.description.slice(0, 8); // show first 8 as featured
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }


   getAllCarts() {
    this.loading = true;
    this.productService.getAllCarts().subscribe((res: any) => {
      this.carts = res;
      this.loading = false;
    });
  }

  getCartById(id: number) {
    this.productService.getCartById(id).subscribe((res: any) => {
      console.log('Cart details:', res);
    });
  }

  addCart() {
    const newCart = {
      userId: 5,
      date: new Date(),
      products: [
        { productId: 1, quantity: 2 },
        { productId: 3, quantity: 1 }
      ]
    };

    this.productService.addCart(newCart).subscribe(res => {
      console.log('Added Cart:', res);
    });
  }

  updateCart() {
    const updatedCart = {
      userId: 5,
      date: new Date(),
      products: [
        { productId: 1, quantity: 5 }
      ]
    };

    this.productService.updateCart(1, updatedCart).subscribe(res => {
      console.log('Updated Cart:', res);
    });
  }

  deleteCart(id: number) {
    this.productService.deleteCart(id).subscribe(res => {
      console.log('Deleted Cart:', res);
      this.getAllCarts();
    });
  }
}


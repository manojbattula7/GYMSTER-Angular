import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  product1 = new Product();
  product2 = new Product();
  product3 = new Product();
  product4 = new Product();
  product5 = new Product();
  product6 = new Product();
  product7 = new Product();
  product8 = new Product();
  product9 = new Product();
  product10 = new Product();
  product11 = new Product();
  product12 = new Product();

}
export class Product {
  cnt: number = 1;
  check: boolean = true;

  checkbtn() {
    this.check = false;
  }

  inc() {
    this.cnt++;
  }

  dec() {
    if (this.cnt <= 1) {
      this.check = true;
    }
    this.cnt--;
  }
}

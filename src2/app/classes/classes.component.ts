import { Component } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  product1 = new Product();
  product2 = new Product();
  product3 = new Product();
  product4 = new Product();
  product5 = new Product();
  product6 = new Product();
  product7 = new Product();
  product8 = new Product();

}
export class Product {
  check: boolean = true;
  check1: boolean = true;
  a: number = 0;
  checkbtn() {
    this.a++;
    if (this.a % 2 != 1)
      this.check1 = false;
    else
      this.check1 = true;
  }
}

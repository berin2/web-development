import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  public name: string;
  public description: string;
  public cost: number;
  constructor() {
    this.name = "Product " + Math.random();
    this.cost = Number.parseFloat((Math.random() * 1000).toPrecision(2));
    this.description = `Product description for product ${this.name}`;
  }
}

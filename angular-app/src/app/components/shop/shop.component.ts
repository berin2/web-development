import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  public items: any [];

  public constructor() {
    //@ts-ignore
    this.items = [1,1,1,1,1,1,1,1,11,1,1];
  }
}

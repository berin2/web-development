import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public name: string;
  public email: string;
  public message:string;

  public constructor() {
    this.name="";
    this.email="";
    this.message="";
  }

}

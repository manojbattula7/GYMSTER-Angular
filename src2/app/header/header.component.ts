import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuVariable:boolean = false;
  displayMenu(){
    this.menuVariable= !this.menuVariable;
  }
  change:boolean = true;
  changebleIcon:String = "fa fa-bars icon-size";
  changeIcon(){
    this.changebleIcon = "fa fa-times icon-size";
  }
}

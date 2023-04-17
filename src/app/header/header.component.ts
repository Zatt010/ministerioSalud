import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  tittle='Mouse-hover'
  showMenu: boolean;
  constructor(){
    this.showMenu= false;
  }
}

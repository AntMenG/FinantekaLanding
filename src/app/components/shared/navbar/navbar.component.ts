import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuActive:string = '';
  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {
  }

  showMenu() {
    this.menuActive === '' ? this.menuActive = 'active' : this.menuActive = '';
  }

  scroll(element: string) {
    // el.scrollIntoView();
    let el = document.getElementById(element);
    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: 'smooth',
    });
    this.menuActive = '';
    event.preventDefault();
  }
}

import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  initParams:InitParams;
  constructor(private fbChatSVC: FacebookService) { 
     this.initParams = {
      xfbml: true,
      version: 'v2.8'
    };
  }

  ngOnInit() {
    this.fbChatSVC.init(this.initParams);
  }

}

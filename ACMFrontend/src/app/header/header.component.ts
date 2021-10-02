import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  asuLogo = "assets/ASU-logo.png";
  acmLogo = "assets/ACM-logo.svg";
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loopingImagePath = "assets/ACM-logo.svg"; //temp
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loopingImagePath = "assets/nasa.jpg"; //temp
  discordImage = "assets/discord.svg";
  facebookImage = "assets/facebook.svg";
  sunDevilSyncImage = "assets/sun-devil-sync.png";
  discordInviteLink = "https://discord.gg/GpcCzEUW";
  facebookLink = ""; // to be entered
  sunDevilSyncLink = "https://asu.campuslabs.com/engage/organization/acm";

  constructor() { }

  ngOnInit(): void {
  }

}

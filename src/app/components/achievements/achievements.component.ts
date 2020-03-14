import { Component, OnInit } from '@angular/core';

import { achievements } from '../../../assets/achievements';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  achievements=achievements;
  constructor() { }

  ngOnInit() {
  }

}

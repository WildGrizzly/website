import { Component, OnInit } from '@angular/core';

import { subjects } from '../../assets/subjects'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  subjects = subjects;
  constructor() { }

  ngOnInit() {

  }

  setHoveredOn(subject) {
    subject.hovered = true;
  }

  setHoveredOff(subject) {
    subject.hovered = false
  }

}

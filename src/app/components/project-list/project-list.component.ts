import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { subjects } from '../../../assets/subjects'
import { Type } from '@angular/compiler';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  project;
  answer;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.project = subjects[this.findIndex(subjects, params.get('projectList'))];
    })
  }

  findIndex (items, name : string) : number {
    this.answer = -1;
    for (let i in items) {
      if (name == items[i].name) {
        this.answer = i;
      }
    }
    return this.answer;
  }
}

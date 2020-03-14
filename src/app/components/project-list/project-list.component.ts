import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProjectService } from '../../services/project-service/project.service'

import { Type } from '@angular/compiler';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  project;
  answer;
  subjects;
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
  ) { 
    this.subjects = this.projectService.getSubjects();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.project = this.subjects[this.findIndex(this.subjects, params.get('projectList'))];
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

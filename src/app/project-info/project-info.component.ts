import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { subjects } from '../../assets/subjects';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {
  subjects = subjects;
  project;
  projectItem;
  element;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.project = params.get('projectList')
      this.projectItem = params.get('projectInfo')
      this.element = this.getElement(this.subjects, this.project, this.projectItem)
    })
  }

  getElement(subjects, project, projectInfo) {
    for(let item of subjects) {
      if(item.name == project) {
        return item.projects[projectInfo]
      }
    }
  }

}

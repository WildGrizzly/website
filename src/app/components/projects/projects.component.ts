import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project-service/project.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  subjects;
  constructor(
    private projectService: ProjectService,
  ) {
  }

  ngOnInit() {
    this.subjects = this.projectService.getSubjects();
    for(let subject of this.subjects){
      subject.hovered = false;
    }
  }

  setHoveredOn(subject) {
    subject.hovered = true;
  }

  setHoveredOff(subject) {
    subject.hovered = false
  }

}

import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

import { MatCardModule} from '@angular/material/card';
import { subjects } from '../../../assets/subjects'
=======
import { ProjectService } from '../../services/project-service/project.service'
>>>>>>> master

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
<<<<<<< HEAD
=======
    this.projectService.getJSON().subscribe(data => {
      this.subjects = data["Subjects"];
      for(let subject of this.subjects){
        subject.hovered = false;
      }
    });
>>>>>>> master
  }
}

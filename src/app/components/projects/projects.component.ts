import { Component, OnInit } from '@angular/core';

import { MatCardModule} from '@angular/material/card';
import { subjects } from '../../../assets/subjects'
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
  }
}

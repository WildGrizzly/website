import { Component, OnInit } from '@angular/core';
import { MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  src = "assets/Resume_Barak_Finnegan.pdf"
  constructor() { }

  ngOnInit() {
  }

}

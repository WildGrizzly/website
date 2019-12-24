import { Component, OnInit } from '@angular/core';

import { links } from './links'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  links = links;
  constructor() { }

  ngOnInit() {
  }

}

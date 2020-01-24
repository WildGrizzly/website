import { Component, OnInit } from '@angular/core';
import { items } from '../../items'

import { MatButtonModule } from '@angular/material/button'


@Component({
  selector: 'app-nav-selector',
  templateUrl: './nav-selector.component.html',
  styleUrls: ['./nav-selector.component.css']
})
export class NavSelectorComponent implements OnInit {
  items = items;

  constructor() { }

  ngOnInit() {
  }

}

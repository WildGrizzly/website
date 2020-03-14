import { Component, OnInit } from '@angular/core';
import { items } from '../../items'
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  items = items;
  constructor() { }

  ngOnInit() {
  }

}

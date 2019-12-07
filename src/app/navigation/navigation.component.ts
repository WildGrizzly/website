import { Component, OnInit } from '@angular/core';
import { items } from '../items'

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

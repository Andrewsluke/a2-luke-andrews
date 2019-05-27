import { Component, OnInit } from '@angular/core';
import { Photographer } from '../photographer';
@Component({
  selector: 'app-photographer',
  templateUrl: './photographer.component.html',
  styleUrls: ['./photographer.component.css']
})
export class PhotographerComponent implements OnInit {
  photog: Photographer = {
    id: 1,
    name: "Ryan Adams"
  }
  constructor() { }

  ngOnInit() {
  }

}

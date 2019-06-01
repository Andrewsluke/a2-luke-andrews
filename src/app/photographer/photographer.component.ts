import { Component, OnInit } from '@angular/core';
import { Photographer } from '../photographer';
import { PHOTOGRAPHERS } from '../mock-photographers';

@Component({
  selector: 'app-photographer',
  templateUrl: './photographer.component.html',
  styleUrls: ['./photographer.component.css']
})
export class PhotographerComponent implements OnInit {
  photographers = PHOTOGRAPHERS; //Array is a list of "mock" photographers temporarily
  selectedPhotographer; //represents photographer that is clicked

  
  constructor() { }

  ngOnInit() {
  }
  onSelect(Photog: Photographer): void {
    this.selectedPhotographer = Photog;
  }

}

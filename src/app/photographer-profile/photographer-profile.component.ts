import { Input, Component, OnInit } from '@angular/core';
import { Photographer } from "../Photographer"

@Component({
  selector: 'app-photographer-profile',
  templateUrl: './photographer-profile.component.html',
  styleUrls: ['./photographer-profile.component.css']
})
export class PhotographerProfileComponent implements OnInit {
  @Input() photographer: Photographer;

  constructor() { }

  ngOnInit() {
  }

}

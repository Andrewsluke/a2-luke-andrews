import { Input, Component, OnInit } from '@angular/core';
import { Photographer } from "../Photographer"
import { ActivatedRoute } from '@angular/router';
import { PhotographerService }  from '../photographer.service';

@Component({
  selector: 'app-photographer-profile',
  templateUrl: './photographer-profile.component.html',
  styleUrls: ['./photographer-profile.component.css']
})
export class PhotographerProfileComponent implements OnInit {
  @Input() photographer: Photographer;

  constructor(
    private route: ActivatedRoute,
    private photographerService: PhotographerService,
  ) { }

  ngOnInit() {
    this.getPhotographer();
  }

  getPhotographer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.photographerService.getPhotographer(id)
      .subscribe(photographer => this.photographer = photographer);
  }

}

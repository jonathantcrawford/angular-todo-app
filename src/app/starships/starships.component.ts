import { Component, OnInit } from '@angular/core';
import { StarshipsService } from './starships.service';
import * as _ from 'lodash';

import { Starship } from './starship';



@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  starships: Starship[];
  constructor(private starshipsService: StarshipsService) { }

  ngOnInit() {
    this.starshipsService.starships.subscribe(data => {
      this.starships = _.values(data.results);
      console.log(data);
    });
  }

}

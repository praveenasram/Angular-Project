import { Component, OnInit } from '@angular/core';

import { Relations } from '../relations';
import { CreateRelationComponent } from '../create-relation/create-relation.component';

@Component({
  selector: 'app-relations-list',
  templateUrl: './relations-list.component.html',
  styleUrls: ['./relations-list.component.css']
})
export class RelationsListComponent implements OnInit {

  /* TO Do -- Using Class Relations
   * or importing relationsList from CreateRelationComponent
   */
   
  //relations = new CreateRelationComponent().relationsList;
  //relations: Relations;

  constructor() {
    
  }

  ngOnInit() {
  }

}

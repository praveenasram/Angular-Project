import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Relations } from '../relations';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-create-relation',
  templateUrl: './create-relation.component.html',
  styleUrls: ['./create-relation.component.css']
})
export class CreateRelationComponent implements OnInit {

  relations = ['Antonyms', 'Synonyms', 'Related']
  relationsList: Relations[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  createRelation(relationForm: NgForm, word1, word2, relation) {
    
    let firstWord: string = word1.toLowerCase(),
      secondWord: string = word2.toLowerCase(),
      selectedRelation: string = relation;

    let newRelation = new Relations();
    newRelation.word1 = firstWord;
    newRelation.word2 = secondWord;
    newRelation.relation = selectedRelation;

    if (firstWord && secondWord && selectedRelation) {
      this.relationsList.push(newRelation);
    }
    else {
      console.log('failed');
    }
  
   relationForm.reset();
    
  }

  onRelatedSelected(event: any) {
    this.relationsList = this.relationsList.filter(rel => rel.relation === 'Related');
  }

  onAntonymsSelected(event: any) {
    this.relationsList = this.relationsList.filter(rel => rel.relation === 'Antonyms');
  }

  onSynonymSelected(event: any) {
    this.relationsList = this.relationsList.filter(rel => rel.relation === 'Synonyms');
  }
}


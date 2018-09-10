import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CreateRelationComponent } from './create-relation/create-relation.component';
import { RelationsListComponent } from './relations-list/relations-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/createRelation', pathMatch: 'full' },
  { path: 'createRelation', component: CreateRelationComponent },
  { path: 'relationsList', component: RelationsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';

const crisesCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          { path: ':id', component: CrisisDetailComponent },
          { path: '', component: CrisisCenterHomeComponent }
        ]// end: children[]
      }
    ]// end: children[]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisesCenterRoutes)
  ],
  exports: [ RouterModule ]
})
export class CrisisRoutingModule {}
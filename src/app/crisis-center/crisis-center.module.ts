import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';

import { CrisisService } from './crisis.service';

import { CrisisRoutingModule } from './crises-routing.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisRoutingModule
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
    CrisisListComponent,
    CrisisDetailComponent
  ],
  providers: [ CrisisService ]
})
export class CrisisCenterModule {}
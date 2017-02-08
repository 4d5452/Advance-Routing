import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComposeMessageComponent } from './compose-message.component';
import { PageNotFoundComponent } from './404.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full'},
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

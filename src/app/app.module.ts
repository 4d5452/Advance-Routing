import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/hero.module';

import { AppComponent }  from './app.component';
import { CrisisListComponent } from './crisis-list.component';
import { PageNotFoundComponent } from './404.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

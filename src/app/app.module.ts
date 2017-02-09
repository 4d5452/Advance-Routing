import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './404.component';

import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/hero.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';

import { ComposeMessageComponent } from './compose-message.component';

import { AdminModule } from './admin/admin.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HeroesModule,
    CrisisCenterModule,
    AdminModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

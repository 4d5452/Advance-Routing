import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Crisis, CrisisService } from './crisis.service';

import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'my-crisis-detail',
  template: `
    <div *ngIf="crisis">
      <h2>{{crisis.name}} details!</h2>
      <div>
        <label>id: </label>{{crisis.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="crisis.name" placeholder="name"/>
      </div>
    </div>
    <button (click)="gotoCrises()">Back</button>
  `,
  animations: [ slideInDownAnimation ]
})
export class CrisisDetailComponent implements OnInit{
  crisis: Crisis;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getCrisis(+params['id']))
      .subscribe((crisis: Crisis) => this.crisis = crisis);
  }

  gotoCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', { id: crisisId }], { relativeTo: this.route });
  }
} 


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
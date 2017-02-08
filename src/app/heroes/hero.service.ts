import { Injectable } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number | string) {
    return Promise.resolve(HEROES)
      .then(heroes => heroes.find(hero => hero.id === +id));
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
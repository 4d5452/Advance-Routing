import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  template: `
    <h2>Hero-List</h2>
    <p>Get heroes here</p>
    <button routerLink="/sidekicks">Goto sidekicks</button>
  `
})
export class HeroListComponent {}
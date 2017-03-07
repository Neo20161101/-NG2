import { Component } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
     <nav>
      <a routerLink="/start" routerLinkActive="active">start</a>
      <a routerLink="/main" routerLinkActive="active">main</a>
    </nav>
  <router-outlet></router-outlet>
    `,
})

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }

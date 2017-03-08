import { Component } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
     <kfl_header></kfl_header>
     <nav>
      <a routerLink="/start" routerLinkActive="active">start</a>
      <a routerLink="/main" routerLinkActive="active">main</a>
    </nav>
  <router-outlet></router-outlet>
  <kfl_footer></kfl_footer>
    `,
})

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }

